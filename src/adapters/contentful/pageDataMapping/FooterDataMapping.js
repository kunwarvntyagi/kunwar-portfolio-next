const getMappedFooterData = (sdkResponse) => {
  let footerMappedData = { items: [] }

  sdkResponse?.items.forEach((item) => {
    let footerData = {
      sys: { id: '' },
      footerLogo: {},
      footerMenuCollection: { items: [] },
    }
    let content = item?.fields
    footerData.sys.id = item.sys.id

    Object.keys(content).map((keyName) => {
      if (keyName === 'menuSlots') {
        let menuSlotCollection = []
        content[keyName].map((data) => {
          menuSlotCollection.push({
            title: data?.fields?.title,
            link: data?.fields?.link?.fields || {},
          })
        })
        footerData.footerMenuCollection = menuSlotCollection
      }
      if (keyName === 'socialLinks') {
        let socialCollection = []
        content[keyName].map((data) => {
          socialCollection.push({
            title: data?.fields?.title,
            link: data?.fields?.link?.fields?.url,
            target: data?.fields?.target,
            image: data?.fields?.image?.fields?.file?.url,
          })
        })
        footerData.footerSocialCollection = socialCollection
      }
      if (keyName === 'footerLogo') {
        let footerLogoDetalils = []
        if (content[keyName]) {
          footerLogoDetalils.push({
            title: content[keyName]?.fields?.title,
            link: content[keyName]?.fields?.link?.fields?.url,
            imamge: content[keyName]?.fields?.image?.fields?.file?.url,
          })
          footerData.footerLogo =
            footerLogoDetalils.length > 0 ? footerLogoDetalils[0] : {}
        }
      }
    })

    footerMappedData.items.push(footerData)
  })
  return { footerMappedData }
}

module.exports = {
  getMappedFooterData,
}
