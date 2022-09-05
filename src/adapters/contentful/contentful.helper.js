const {
  getHeaderData,
  getFooterData,
  getHomePageSlug,
} = require('./contentful.adapter')

const { getMappedHeaderData } = require('./pageDataMapping/HeaderDataMapping')
const { getMappedFooterData } = require('./pageDataMapping/FooterDataMapping')
const {
  getMappedHomePageData,
} = require('./pageDataMapping/HomePageDataMapping')

const getHeaderMappedData = async () => {
  const entries = await getHeaderData()
  return getMappedHeaderData(entries)
}

const getHomePageMappedData = async () => {
  const entries = await getHomePageSlug()
  return getMappedHomePageData(entries)
}

const getFooterMappedData = async () => {
  const entries = await getFooterData()
  return getMappedFooterData(entries)
}

module.exports = {
  getHeaderMappedData,
  getFooterMappedData,
  getHomePageMappedData,
}
