import { getHeaderMappedData } from '../adapters/contentful/contentful.helper'
import Layout from '../components/Layout'
import '../styles/main.css'

function MyApp({ Component, pageProps, headerData }) {
  return (
    <Layout headerData={headerData}>
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

  return {
    pageProps,
    headerData: headerData?.headerMappedData?.items[0],
  }
}

export default MyApp
