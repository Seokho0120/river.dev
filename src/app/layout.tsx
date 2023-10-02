import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';

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
      <body className='w-full overflow-auto'>
        <header className='sticky top-0 bg-white z-10'>
          <Navbar />
        </header>
        <main className='w-full justify-center max-w-3xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
