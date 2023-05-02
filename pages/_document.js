import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>My portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
