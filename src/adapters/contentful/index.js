require('dotenv').config()
import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.CF_SPACE_ID,
  environment: process.env.CF_ENVIRONMENT,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
})

export function getContentfulClient() {
  return contentfulClient
}
