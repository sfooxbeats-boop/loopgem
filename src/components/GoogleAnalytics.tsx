import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js). Rendered only when NEXT_PUBLIC_GA_ID is set,
 * so local/dev builds without the env var stay clean. GA4 "enhanced
 * measurement" tracks SPA route changes automatically, so no manual
 * router page_view wiring is needed.
 */
export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
