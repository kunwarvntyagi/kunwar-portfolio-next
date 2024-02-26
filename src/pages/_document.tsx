import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const MyDocument = () => {
    return (
        <Html lang={process.env.SITE_LANG}>
            <Head>
                <link rel="icon" href="/static/images/favicon.ico" />
                <link
                    rel="icon preload"
                    as="image"
                    href="/static/images/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="shortcut icon preload"
                    as="image"
                    href="/static/images/favicon.ico"
                    type="image/x-icon"
                />
                {/* <link rel="stylesheet" href="/static/css/main.css" /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
export default MyDocument
