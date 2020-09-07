import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-Hant">
        <Head />
        <body className="bg-gray-100 text-pmbrown-800 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
