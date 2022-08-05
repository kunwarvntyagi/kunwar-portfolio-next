const { getHeaderData, getFooterData } = require('./contentful.adapter')

const { getMappedHeaderData } = require('./pageDataMapping/HeaderDataMapping')
const { getMappedFooterData } = require('./pageDataMapping/FooterDataMapping')

const getHeaderMappedData = async () => {
  const entries = await getHeaderData()
  return getMappedHeaderData(entries)
}

const getFooterMappedData = async () => {
  const entries = await getFooterData()
  return getMappedFooterData(entries)
}

module.exports = {
  getHeaderMappedData,
  getFooterMappedData,
}
