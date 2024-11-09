import '@/styles/global.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return AppConfig.locales.map(locale => ({ locale }));
}

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  const messages = useMessages();

  return (
    <html lang={props.params.locale} className={poppins.className}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
