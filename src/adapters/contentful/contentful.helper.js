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
import { getMappedPagesData } from './pageDataMapping/AllPagesDataMapping'
import { getPageData } from './contentful.adapter'

export const getHeaderMappedData = async () => {
  const entries = await getHeaderData()
  return getMappedHeaderData(entries)
}

export const getHomePageMappedData = async () => {
  const entries = await getHomePageSlug()
  return getMappedHomePageData(entries)
}

export const getFooterMappedData = async () => {
  const entries = await getFooterData()
  return getMappedFooterData(entries)
}

export const getPageMappedData = async (slug) => {
  // console.info('mapp slug', slug)
  const entries = await getPageData(slug)
  return getMappedPagesData(entries)
}