import { getHeaderData, getFooterData, getHomePageSlug } from './contentful.adapter'
import { getMappedFooterData } from './pageDataMapping/FooterDataMapping'
import { getMappedHeaderData } from './pageDataMapping/HeaderDataMapping'
import { getMappedHomePageData } from './pageDataMapping/HomePageDataMapping'
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