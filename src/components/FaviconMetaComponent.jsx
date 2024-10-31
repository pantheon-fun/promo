import Head from 'next/head';
import React from 'react';

export const FaviconMetaComponent = () => {
  // Фавикон. Руками не трогать! См: /wiki/apps/promo/favicon.md
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=1" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=1" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=1" />
      <link rel="manifest" href="/favicon/site.webmanifest?v=1" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=1" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon/favicon.ico?v=1" />
      <meta name="apple-mobile-web-app-title" content="Pantheon" />
      <meta name="application-name" content="Pantheon" />
      <meta name="msapplication-TileColor" content="#141111" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=1" />
      <meta name="theme-color" content="#141111" />
    </Head>
  );
};
