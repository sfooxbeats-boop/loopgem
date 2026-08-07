/**
 * Server-side PayPal order verification.
 *
 * The PayPal buttons run entirely in the buyer's browser, so nothing the client
 * sends about a payment can be trusted — the order amount is even chosen in
 * client code. Before delivering a paid course we re-check the order against
 * PayPal's API with credentials the browser never sees.
 */

const LIVE = "https://api-m.paypal.com";
const SANDBOX = "https://api-m.sandbox.paypal.com";

function apiBase() {
  return process.env.PAYPAL_ENV === "sandbox" ? SANDBOX : LIVE;
}

export class PayPalNotConfiguredError extends Error {}

function credentials() {
  const clientId = process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !secret) {
    throw new PayPalNotConfiguredError(
      "PAYPAL_CLIENT_SECRET (and a client id) must be set to verify payments"
    );
  }
  return { clientId, secret };
}

async function getAccessToken(): Promise<string> {
  const { clientId, secret } = credentials();
  const res = await fetch(`${apiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`PayPal auth failed (${res.status})`);
  }
  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("PayPal auth returned no access token");
  return data.access_token;
}

type PayPalOrder = {
  id?: string;
  status?: string;
  payer?: { email_address?: string; name?: { given_name?: string; surname?: string } };
  purchase_units?: Array<{
    amount?: { currency_code?: string; value?: string };
    payments?: {
      captures?: Array<{
        status?: string;
        amount?: { currency_code?: string; value?: string };
      }>;
    };
  }>;
};

export type VerifyResult =
  | { ok: true; payerEmail: string; payerName: string; paid: number }
  | { ok: false; reason: string };

/**
 * Confirm `orderId` is a real, completed PayPal order worth at least
 * `expectedAmount` USD. Returns the payer details taken from PayPal — never
 * from the client — so replaying someone else's order id can only ever
 * re-deliver the course to the person who actually paid for it.
 */
export async function verifyOrder(
  orderId: string,
  expectedAmount: number
): Promise<VerifyResult> {
  const token = await getAccessToken();
  const res = await fetch(`${apiBase()}/v2/checkout/orders/${encodeURIComponent(orderId)}`, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (res.status === 404) return { ok: false, reason: "Order not found at PayPal" };
  if (!res.ok) return { ok: false, reason: `PayPal lookup failed (${res.status})` };

  const order = (await res.json()) as PayPalOrder;

  if (order.status !== "COMPLETED") {
    return { ok: false, reason: `Order status is ${order.status ?? "unknown"}, not COMPLETED` };
  }

  const unit = order.purchase_units?.[0];
  // Prefer the captured amount — that is the money actually taken
  const capture = unit?.payments?.captures?.find((c) => c.status === "COMPLETED");
  const money = capture?.amount ?? unit?.amount;
  const currency = money?.currency_code;
  const paid = Number(money?.value);

  if (currency !== "USD") {
    return { ok: false, reason: `Unexpected currency ${currency ?? "none"}` };
  }
  if (!Number.isFinite(paid) || paid + 0.005 < expectedAmount) {
    return { ok: false, reason: `Paid ${money?.value ?? "nothing"}, expected ${expectedAmount}` };
  }

  const payerEmail = order.payer?.email_address ?? "";
  if (!payerEmail) return { ok: false, reason: "PayPal returned no payer email" };

  const payerName = [order.payer?.name?.given_name, order.payer?.name?.surname]
    .filter(Boolean)
    .join(" ");

  return { ok: true, payerEmail, payerName, paid };
}
