const getMappedHomePageData = (sdkResponse) => {
  let homePageMappedData = { items: [] }

  sdkResponse?.items.forEach((item) => {
    let homeData = {
      sys: { id: '' },
      pageMetaData: {},
      pageContentCollection: { items: [] },
    }
    let content = item?.fields
    homeData.sys.id = item.sys.id

    Object.keys(content).map((keyName) => {
      if (typeof content[keyName] === 'string') {
        homeData[keyName] = content[keyName]
      }
      if (keyName === 'pageMetadata') {
        homeData.pageMetaData = content[keyName]?.fields || null
      }
      if (keyName === 'pageContent') {
        content[keyName].map((pageContent) => {
          homeData.pageContentCollection.items.push(pageContent?.fields)
        })
      }
      // if (keyName === 'menuSlots') {
      //   let menuItemCollection = []
      //   let menuSlotCollection = []
      //   content[keyName].map((data) => {
      //     menuItemCollection.push({
      //       title: data?.fields?.title,
      //       menuItem: data?.fields?.menuItems,
      //       link: data?.fields?.link?.fields || {},
      //     })
      //   })
      //   menuSlotCollection.push({
      //     title: keyName,
      //     menuItemCollection: menuItemCollection,
      //   })
      //   homeData.headerMenuCollection = menuSlotCollection
      // }
      // if (keyName === 'headerLogo') {
      //   let headerLogoDetalils = []
      //   if (content[keyName]) {
      //     headerLogoDetalils.push({
      //       title: content[keyName]?.fields?.title,
      //       link: content[keyName]?.fields?.link?.fields?.url,
      //       imamge: content[keyName]?.fields?.image?.fields?.file?.url,
      //     })
      //     homeData.headerLogo =
      //       headerLogoDetalils.length > 0 ? headerLogoDetalils[0] : {}
      //   }
      // }
    })

    homePageMappedData.items.push(homeData)
  })
  return { homePageMappedData }
}

module.exports = {
  getMappedHomePageData,
}
