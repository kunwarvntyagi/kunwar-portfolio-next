/** @type {import('next-sitemap').IConfig} */
const robotsDev = [
    {
        userAgent: '*',
        allow: ['/'],
    }

]

const robotsProd = [
    {
        userAgent: '*',
        disallow: ['/']
    },
]

module. exports = {
    siteUrl: process.env.DOMAIN ? `https://$(process.env.DOMAIN}`: 'http://localhost:3000', 
    outDir: 'public',
    autoLastmod: false, 
    generateRobotsTxt: true, 
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies:
            process. env.NODE_ENV === 'development' ? robotsProd : robotsDev,
    }
}