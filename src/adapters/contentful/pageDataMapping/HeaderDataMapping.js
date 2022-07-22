const getMappedHeaderData = (sdkResponse) => {
  let headerMappedData = { items: [] }

  sdkResponse?.items.forEach((item) => {
    let headerData = {
      sys: { id: '' },
      headerLogo: {},
      headerMenuCollection: { items: [] },
    }
    let content = item?.fields
    headerData.sys.id = item.sys.id

    Object.keys(content).map((keyName) => {
      if (keyName === 'menuSlots') {
        let menuItemCollection = []
        let menuSlotCollection = []
        content[keyName].map((data) => {
          menuItemCollection.push({
            title: data?.fields?.title,
            menuItem: data?.fields?.menuItems,
            link: data?.fields?.link?.fields || {},
          })
        })
        menuSlotCollection.push({
          title: keyName,
          menuItemCollection: menuItemCollection,
        })
        headerData.headerMenuCollection = menuSlotCollection
      }
      if (keyName === 'headerLogo') {
        let headerLogoDetalils = []
        if (content[keyName]) {
          headerLogoDetalils.push({
            title: content[keyName]?.fields?.title,
            link: content[keyName]?.fields?.link?.fields?.url,
            imamge: content[keyName]?.fields?.image?.fields?.file?.url,
          })
          headerData.headerLogo =
            headerLogoDetalils.length > 0 ? headerLogoDetalils[0] : {}
        }
      }
    })

    headerMappedData.items.push(headerData)
  })
  return { headerMappedData }
}

module.exports = {
  getMappedHeaderData,
}
