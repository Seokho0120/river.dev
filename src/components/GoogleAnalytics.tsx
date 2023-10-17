'use client';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

import { useEffect } from 'react';
import { pageview } from '../libs/gtagHelper';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

interface GoogleAnalyticsProps {
  GA_TRACKING_ID: string;
}

// export default function GoogleAnalytics() {
const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  GA_TRACKING_ID,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const url = pathname + searchParams.toString();

    (window as any).gtag('config', GA_TRACKING_ID, { debug_mode: true });

    pageview(GA_TRACKING_ID, url);
  }, [GA_TRACKING_ID, pathname, searchParams]);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
};
export default GoogleAnalytics;
