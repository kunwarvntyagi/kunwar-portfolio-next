const withImages = require('next-images')
module.exports = withImages({})

require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    loader: 'custom',
    formats: ['image/avif', 'image/webp'],
    domains: ['images.ctfassets.net']
  }, 
  env: {
    CF_SPACE_ID: process.env.CF_SPACE_ID,
    CF_ENVIRONMENT: process.env.CF_ENVIRONMENT,
    CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN,
    CF_LOCALE: process.env.CF_LOCALE,
    DOMAIN: process.env.DOMAIN
  },
  webpack(config) {
    if(process.env.NODE_ENV === 'development') {
      const DuplicatePackageWebpackCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
      config.plugins.push(new DuplicatePackageWebpackCheckerPlugin())
    }
    return config
  }
}

module.exports = nextConfig
