import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'River Blog',
    template: 'River Blog | %s',
  },
  description: '공부하고 기록하고 공유하는 River의 개인 기술 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={sans.className}>
      {/* <link rel='icon' href='/favicon.ico' sizes='any' /> */}
      <body>{children}</body>
    </html>
  );
}
