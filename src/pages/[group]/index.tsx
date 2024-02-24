import React from 'react'
import { getPageSlug } from '../../adapters/contentful/contentful.adapter'
import { getPageMappedData } from '../../adapters/contentful/contentful.helper'
import ProjectListingPage from '../../containers/ProjectListingPage'
import TextPage from '../../containers/TextPage'
import { LANG } from '../../constants'
import { GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    let pathArray = []

    const projectListingPageSlug = await getPageSlug()

    pathArray = pathArray.concat([
        ...projectListingPageSlug.items
            .filter((item) => Boolean(item?.fields?.slug))
            .filter((item) => item?.fields?.group === undefined)
            .filter((item) => item?.fields?.parent === undefined)
            .map((item) => ({
                params: {
                    group: item?.fields?.slug,
                    lang: LANG,
                },
            })),
    ])

    // console.info(pathArray)

    return {
        paths: pathArray,
        fallback: false,
    }
}

export const getStaticProps = async ({ params, preview }) => {
    let pageData = null

    console.info(params, preview)

    const { allPageData } = await getPageMappedData(params?.group)

    if (allPageData.items.length) {
        pageData = allPageData.items[0]
    }

    const pageType = pageData?.pageType || null

    return {
        props: {
            pageData: pageData,
            pageType: pageType,
        },
    }
}

const groupPages = (props) => {
    const { pageData, pageType } = props

    let textPageData = null
    let projectListingData = null

    switch (pageType) {
        case 'Text Page':
            textPageData = pageData
            return <TextPage {...textPageData} />
        case 'Project Listing Page':
            projectListingData = pageData
            return <ProjectListingPage {...projectListingData} />
    }
    return null
}

export default groupPages
