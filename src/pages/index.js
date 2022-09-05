import { getHomePageMappedData } from '../adapters/contentful/contentful.helper'

const { default: HomePage } = require('../containers/HomePage')

const EntryPage = (props) => {
  console.info(props)

  return (
    <>
      <HomePage />
    </>
  )
}

export async function getStaticProps() {
  let pageProps = {}
  let homePageData = await getHomePageMappedData()
  return {
    props: {
      homePageData: homePageData?.homePageMappedData?.items[0],
    },
  }
}

export default EntryPage
