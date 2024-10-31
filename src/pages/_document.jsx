import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GoogleFontsScript } from '@/externalAdapters/googleFonts';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <GoogleFontsScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
