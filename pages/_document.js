import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-Hant">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <body className="bg-pmpink text-pmbrown-800 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
