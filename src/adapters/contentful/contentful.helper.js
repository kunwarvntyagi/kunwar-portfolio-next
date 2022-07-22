const { getHeaderData } = require('./contentful.adapter')

const { getMappedHeaderData } = require('./pageDataMapping/HeaderDataMapping')

const getHeaderMappedData = async () => {
  const entries = await getHeaderData()
  return getMappedHeaderData(entries)
}

module.exports = {
  getHeaderMappedData,
}
