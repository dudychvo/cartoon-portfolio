import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Volodymyr Dudych',
  description: 'Cartoon style portfolio - Frontend Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`scroll-smooth h-full antialiased`}>
      <body
        className={`${montserrat.className} ${montserrat.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
