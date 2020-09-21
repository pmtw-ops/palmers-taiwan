import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-Hant">
        <Head></Head>
        <body className="bg-pmpink text-pmbrown-800 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
