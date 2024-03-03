import { Noto_Sans, Noto_Sans_JP } from 'next/font/google';

export const noto_sans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const noto_sans_jp = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  display: 'swap',
});
