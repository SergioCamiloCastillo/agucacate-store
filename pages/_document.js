// Dependencies
import React from 'react';
import Document, {
  Html, Head, Main, NextScript
} from 'next/document';
//aplica para todas las paginas
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;