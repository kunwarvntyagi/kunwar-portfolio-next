const client = require('./contentful.connection')

const getHeaderData = async () => {
  return await client.getEntries({
    content_type: 'siteHeader',
    include: 5,
  })
}

const getHomePageSlug = async () => {
  return client.getEntries({
    content_type: 'homePage',
    include: 5,
  })
}

const getProjectListingPageSlug = async () => {
  return client.getEntries({
    content_type: 'projectListingPage',
    include: 5,
  })
}

const getProjectDetailPageSlug = async () => {
  return client.getEntries({
    content_type: 'projectDetailPage',
    include: 5,
  })
}


module.exports = {
  getHeaderData,
  getHomePageSlug,
  getProjectDetailPageSlug,
  getProjectListingPageSlug
}
