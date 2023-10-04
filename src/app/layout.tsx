import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Provider from 'src/components/Provider';

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
      <body className='w-full flex flex-col overflow-auto antialiased max-w-screen-md mx-auto px-4 dark:bg-gray-900'>
        <Provider>
          <header className='mb-16'>
            <Navbar />
          </header>
          <main className='grow'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
