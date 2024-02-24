const client = require('./contentful.connection')

const getHeaderData = async () => {
  return await client.getEntries({
    content_type: 'siteHeader',
    include: 5,
  })
}

const getFooterData = async () => {
  return await client.getEntries({
    content_type: 'siteFooter',
    include: 5,
  })
}

const getHomePageSlug = async () => {
  return client.getEntries({
    content_type: 'homePage',
    include: 5,
  })
}

const getPageSlug = async () => {
  return await client.getEntries({
    content_type: 'page',
    include: 5,
  })
}

const getPageData = async (slug) => {
  return await client.getEntries({
    content_type: 'page',
    include: 5,
    'fields.slug': slug
  })
}

// cosnt getProjectDetailPageSlug = async (slug) => {

// }

module.exports = {
  getHeaderData,
  getFooterData,
  getHomePageSlug,
  getPageSlug,
  getPageData
}
