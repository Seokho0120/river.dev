/// <reference types="gtag.js" />

declare module 'gtag.js';

export interface EventProps {
  action: Gtag.EventNames | string;
  category: string;
  label: string;
  value: string | number;
}
