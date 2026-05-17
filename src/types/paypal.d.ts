type PayPalOrderActions = {
  order: {
    create: (opts: unknown) => Promise<string>;
    capture: () => Promise<{
      payer?: {
        email_address?: string;
        name?: { given_name?: string; surname?: string };
      };
    }>;
  };
};

interface Window {
  paypal?: {
    FUNDING: { PAYPAL: string; CARD: string };
    Buttons: (config: {
      fundingSource?: string;
      createOrder: (data: unknown, actions: PayPalOrderActions) => Promise<string>;
      onApprove: (data: unknown, actions: PayPalOrderActions) => Promise<void>;
      onError: (err: unknown) => void;
      style?: Record<string, unknown>;
    }) => { isEligible: () => boolean; render: (el: HTMLElement) => void };
  };
}
