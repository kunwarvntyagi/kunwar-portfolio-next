import {
  getHeaderMappedData,
  getFooterMappedData,
} from '../adapters/contentful/contentful.helper'
import Layout from '../components/Layout'
import '../styles/main.css'

function MyApp({ Component, pageProps, headerData, footerData }) {
  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  let headerData = await getHeaderMappedData()
  let footerData = await getFooterMappedData()

  return {
    pageProps,
    headerData: headerData?.headerMappedData?.items[0],
    footerData: footerData?.footerMappedData?.items[0],
  }
}

export default MyApp
