import HomePage from 'src/containers/HomePage'
import { getHomePageMappedData } from '../adapters/contentful/contentful.helper'
import React from 'react'
import { HomePageDataProps } from 'src/types/page'

const EntryPage = (props: HomePageDataProps) => {
    const { pageData } = props

    return (
        <>
            <HomePage {...pageData} />
        </>
    )
}

export async function getStaticProps() {
    const pageData = await getHomePageMappedData()
    return {
        props: {
            pageData: pageData?.homePageMappedData?.items[0],
        },
    }
}

export default React.memo(EntryPage)
