import React from 'react'
import {
    getHeaderMappedData,
    getFooterMappedData,
} from '../adapters/contentful/contentful.helper'
import Layout from '../components/Layout'
import '../styles/main.css'
import { AppProps } from 'next/app'
// import { telemetry } from '../adapters/telemetry'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { headerData, footerData } = pageProps

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=5.0, shrink-to-fit=no"
                />
            </Head>
            <React.StrictMode>
                <Layout
                    headerData={headerData}
                    footerData={footerData}
                    pageInfo={pageProps.pageData}
                >
                    <Component {...pageProps} />
                </Layout>
            </React.StrictMode>
        </>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }
    const headerData = await getHeaderMappedData()
    const footerData = await getFooterMappedData()

    pageProps = {
        ...pageProps,
        headerData: headerData?.headerMappedData?.items[0],
        footerData: footerData?.footerMappedData?.items[0],
    }

    return {
        pageProps,
    }
}

export default MyApp
