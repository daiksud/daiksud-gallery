import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { noto_sans, noto_sans_jp } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daiksud Gallery',
  description: 'The daiksud gallery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${noto_sans.variable} ${noto_sans_jp.variable}`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
