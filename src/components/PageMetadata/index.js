import Helmet from 'next/head'
const PageMetadata = ({ metadata }) => {
  return (
    <Helmet>
      <title>{metadata?.title}</title>
      <meta name="title" content={metadata?.title} />
      <meta name="keywords" content={metadata?.metaKeywords} />
      <meta name="description" content={metadata?.metaDescription} />
      <link
        rel="canonical"
        href={process.env.DOMAIN + metadata?.canonicalUrl}
      />
    </Helmet>
  )
}

export default PageMetadata
