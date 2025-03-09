import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ProgressBarProvider from '@/components/providers/ProgressBarProvider';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import metadataConfig from '@/config/metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center`}
      >
        <ProgressBarProvider>
          <Header />
          <main className="flex flex-col items-center w-full">
            {children}
          </main>
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
