import type { Metadata } from 'next';
import './globals.css';

import { NavigationBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { initTtag } from '@/i18n';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface iProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: iProps) {
  initTtag(params.locale);

  return (
    <html lang="en">
      <body>
        <NavigationBar />

        <div className="content">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
