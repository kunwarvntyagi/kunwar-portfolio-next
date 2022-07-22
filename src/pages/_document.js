/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content="Kunwar Portfolio" />
        <link rel="icon" href="static/images/favicon.ico" />
        <link
          rel="icon preload"
          as="image"
          href="static/images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="/static/css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default MyDocument
