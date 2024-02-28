import { getArticlePageMappedData } from '@adapters/contentful/contentful.helper'
import { GetServerSideProps } from 'next'
import React from 'react'
import TextPage from 'src/containers/TextPage'
import ErrorPage from '../404'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    let pageData = null

    const { allPageData } = await getArticlePageMappedData(params?.slug)

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

const articlePages = (props) => {
    const { pageData, pageType } = props

    let textPageData = null

    switch (pageType) {
        case 'Text Page':
            textPageData = pageData
            return <TextPage {...textPageData} />
    }
    return <ErrorPage />
}

export default articlePages
