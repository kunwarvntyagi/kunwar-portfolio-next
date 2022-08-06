const contentful = require('contentful')

let client

client = contentful.createClient({
  space: process.env.CF_SPACE_ID,
  environment: process.env.CF_ENVIRONMENT,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
})

module.exports = client
