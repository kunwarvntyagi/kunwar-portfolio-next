import React from 'react'
import { getPageSlug } from '../../../adapters/contentful/contentful.adapter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { LANG } from '../../../constants'
import { getParentPageMappedData } from '@adapters/contentful/contentful.helper'
import TextPage from 'src/containers/TextPage'

export const getStaticPaths: GetStaticPaths = async () => {
    let pathArray = []

    const projectDetailPageSlug = await getPageSlug()

    pathArray = pathArray.concat([
        ...projectDetailPageSlug.items
            .filter((item) => Boolean(item?.fields?.group))
            .map((item) => ({
                params: {
                    group: item?.fields?.group,
                    lang: LANG,
                    parent: item?.fields?.parent,
                },
            })),
    ])

    return {
        paths: pathArray,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let pageData = null

    const { allPageData } = await getParentPageMappedData(
        params?.group,
        params?.parent,
    )

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

const parentPages = (props) => {
    const { pageData, pageType } = props

    let textPageData = null
    let projectListingData = null

    switch (pageType) {
        case 'Text Page':
            textPageData = pageData
            return <TextPage {...textPageData} />
        case 'Project Details Page':
            projectListingData = pageData
            return <TextPage {...projectListingData} />
    }
    return null
}

export default parentPages
