import Head from 'next/head'
import { PageMetadataProps } from './PageMetadata.types'

const PageMetaData = (props: PageMetadataProps) => {
    const { title, description, keywords, canonicalUrl, type, image } = props
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:type" content={type} />
                <meta
                    property="og:url"
                    content={`${process.env.DOMAIN}${canonicalUrl}`}
                />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="image" content={image} />
                <meta property="og:image" content={image} />
                <link
                    rel="canonical"
                    href={`${process.env.DOMAIN}${canonicalUrl}`}
                />
            </Head>
        </>
    )
}

export default PageMetaData
