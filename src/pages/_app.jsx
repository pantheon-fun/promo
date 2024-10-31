import Router from 'next/router';

import { hit, YMScript } from '@/externalAdapters/ym';

import 'smooth-smooth-scroll/polyfill';
import '@/styles/main.scss';

Router.events.on('routeChangeComplete', (url) => {
  hit(url);
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <YMScript />
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </>
  );
}
