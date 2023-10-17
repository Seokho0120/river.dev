import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID || '';

export interface EventProps {
  action: Gtag.EventNames | string;
  category: string;
  label: string;
  value: string | number;
}

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url: URL) => {
//   window.gtag('config', GA_MEASUREMENT_ID, {
//     page_path: url,
//   });
// };

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }: EventProps) => {
//   try {
//     if (window) {
//       window.gtag('event', action, {
//         event_category: category,
//         event_label: label,
//         value: value,
//         // send_to: GA_TRACKING_ID,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const useGtag = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = (url: URL) => {
//       pageview(url);
//     };

//     router.events.on('routeChangeComplete', handleRouteChange);
//     router.events.on('hashChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//       router.events.off('hashChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);
// };
