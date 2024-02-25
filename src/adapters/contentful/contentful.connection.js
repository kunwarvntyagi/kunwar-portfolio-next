import { createClient } from 'contentful'


export const client = createClient({
  space: process.env.CF_SPACE_ID,
  environment: process.env.CF_ENVIRONMENT,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
})
