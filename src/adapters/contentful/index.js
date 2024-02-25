import dotenv from 'dotenv'
import { createClient } from 'contentful'

dotenv.config()

export const contentfulClient = createClient({
  space: process.env.CF_SPACE_ID,
  environment: process.env.CF_ENVIRONMENT,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
})

export function getContentfulClient() {
  return contentfulClient
}
