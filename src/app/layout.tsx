import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Open_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Provider from 'src/components/Provider';
import { AnalyticsContainer } from '../components/analytics';
import * as gtag from '../libs/gtags';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://river-dev.vercel.app/'),
  title: {
    default: 'River Blog',
    template: 'River Blog | %s',
  },
  description: '공부하고 기록하며 공유하는 이석호의 개인 기술 블로그',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '이석호',
    description: '공부하고 기록하며 공유하는 이석호의 개인 기술 블로그',
    url: 'https://river-dev.vercel.app/',
    locale: 'ko_KR',
    type: 'website',
    siteName: '이석호',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={sans.className}>
      <meta
        name='google-site-verification'
        content='DrXuqvDuhqEVVfKJMO_1BwzoHwMQ7jktZxGV1XOB56c'
      />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
        `}
      </Script>

      <body className='w-full flex flex-col overflow-auto antialiased max-w-screen-md mx-auto px-4 dark:bg-gray-900'>
        <Provider>
          <header className='mb-16'>
            <Navbar />
          </header>
          <main className='grow'>{children}</main>
          <Footer />
        </Provider>
        <AnalyticsContainer />
      </body>
    </html>
  );
}
