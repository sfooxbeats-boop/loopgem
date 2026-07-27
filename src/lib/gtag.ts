// Lightweight GA4 event helper. Safe to call anywhere on the client;
// no-ops on the server or when gtag hasn't loaded (e.g. blocked by an
// ad blocker). See src/components/GoogleAnalytics.tsx for the loader.
type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag === "function") {
    gtag("event", name, params);
  }
}
