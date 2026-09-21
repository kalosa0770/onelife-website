"use client";

import Script from "next/script";

// Meta Pixel + GA4 for the event landing pages. IDs come from
// NEXT_PUBLIC_META_PIXEL_ID / NEXT_PUBLIC_GA_MEASUREMENT_ID; unset means no
// tracking script is loaded at all (local dev, previews).

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type Win = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

export function trackConversion(conversion: { pixelEvent: string; gaEvent: string }, form: string) {
  const w = window as Win;
  w.fbq?.("track", conversion.pixelEvent, { content_name: form });
  w.gtag?.("event", conversion.gaEvent, { form_id: form });
}

export const Tracking = () => (
  <>
    {GA_ID && (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </>
    )}
    {PIXEL_ID && (
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src='https://connect.facebook.net/en_US/fbevents.js';s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
      </Script>
    )}
  </>
);
