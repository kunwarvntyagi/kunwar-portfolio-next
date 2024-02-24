/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const withBundleAnalyzer = 
  process.env.NODE_ENV === 'development' ?
  require('@next/bundle-analyzer')() 
  : (config) => config

const gitRevisionPlugin = new GitRevisionPlugin()
const withImages = require('next-images')
module.exports = withImages({})

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  compress: true,
  trailingSlash: true,
  // images: {
  //   disableStaticImages: true,
  //   loader: 'custom',
  //   formats: ['image/avif', 'image/webp'],
  //   domains: ['images.ctfassets.net']
  // }, 
  images: {
    unoptimized: true, // due to SSG, next/image needs SSR for image/optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net/**'
      }
    ]
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
      config.plugins.push(
        new DuplicatePackageWebpackCheckerPlugin({ verbose: true })
      )
    }
    config.plugins.push(gitRevisionPlugin)
    config.plugins.push(
      new webpack.DefinePlugin({ 
        VERSION: JSON.stringify(gitRevisionPlugin.version()),
        COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
        BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
        LASTCOMMITDATETIME: JSON.stringify(gitRevisionPlugin.lastcommitdatetime()),
       })
    )
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-is': path.resolve(
        __dirname,
        'node_modules/prop-types/index.js',
      )
    }
    return config
  }
}

module.exports = process.env.BUNDLE_ANALYZER === ' true' ? 
  withBundleAnalyzer(nextConfig) : nextConfig
