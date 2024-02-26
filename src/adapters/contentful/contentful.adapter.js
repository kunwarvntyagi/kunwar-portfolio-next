import { client } from './contentful.connection'

export const getHeaderData = async () => {
  return await client.getEntries({
    content_type: 'siteHeader',
    include: 5,
  })
}

export const getFooterData = async () => {
  return await client.getEntries({
    content_type: 'siteFooter',
    include: 5,
  })
}

export const getHomePageSlug = async () => {
  return client.getEntries({
    content_type: 'homePage',
    include: 5,
  })
}

export const getPageSlug = async () => {
  return await client.getEntries({
    content_type: 'page',
    include: 5,
  })
}

export const getPageData = async (slug) => {
  return await client.getEntries({
    content_type: 'page',
    include: 5,
    'fields.slug': slug
  })
}

export const getParentPageData = async (group, parent) => {
  return await client.getEntries({
    content_type: 'page',
    include: 5,
    'fields.group': group,
    'fields.parent': parent
  })
}

// cosnt getProjectDetailPageSlug = async (slug) => {

// }

// module.exports = {
//   getHeaderData,
//   getFooterData,
//   getHomePageSlug,
//   getPageSlug,
//   getPageData
// }
