import type { Metadata, Viewport } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sacrament-meetings-rust.vercel.app/'),
  title: {
    default: 'Sacrament Meeting Planner',
    template: '%s | Sacrament Meeting Planner',
  },
  description: 'Plan, manage, and print sacrament meeting programs.',
   openGraph: {
    title: 'Sacrament Meeting Planner',
    description: 'Plan, manage, and print sacrament meeting programs for your ward.',
    images: ['/meeting.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}