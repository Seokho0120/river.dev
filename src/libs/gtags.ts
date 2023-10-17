import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { EventProps } from './types';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config' as 'config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventProps) => {
  try {
    if (window) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        // send_to: GA_TRACKING_ID,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
