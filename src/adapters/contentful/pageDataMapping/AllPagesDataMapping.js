import { fetchData } from './dataMapperHelper'

export const getMappedPagesData = (sdkResponse) => {
  let allPageData = { items: [] }

  sdkResponse?.items.forEach((item) => {
    let pageData = {
      sys: { id: '' },
      pageMetaData: {},
      pageContentCollection: { items: [] },
      breadcrumbs: []
    }
    let content = item?.fields
    pageData.sys.id = item.sys.id

    Object.keys(content).map((keyName) => {
      if (typeof content[keyName] === 'string') {
        pageData[keyName] = content[keyName]
      }
      if (keyName === 'pageMetadata') {
        pageData.pageMetaData = content[keyName]?.fields || null
      }
      if(keyName === 'breadcrumbs')  {
        content[keyName].map((breadcrumb) => {
          pageData.breadcrumbs.push(breadcrumb.fields)
        })
      }
      if (keyName === 'pageContent') {
        content[keyName].map((pageContent) => {
          pageData.pageContentCollection.items.push(
            fetchData(pageContent.sys.contentType.sys.id, pageContent)
          )
        })
      }
    })

    allPageData.items.push(pageData)
  })
  return { allPageData }
}
