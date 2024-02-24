import HomePage from 'src/containers/HomePage'
import { getHomePageMappedData } from '../adapters/contentful/contentful.helper'
import React from 'react'
import { HomePageDataProps } from 'src/types/page'

const EntryPage = (props: HomePageDataProps) => {
    const { homePageData } = props

    return (
        <>
            <HomePage {...homePageData} />
        </>
    )
}

export async function getStaticProps() {
    const homePageData = await getHomePageMappedData()
    return {
        props: {
            homePageData: homePageData?.homePageMappedData?.items[0],
        },
    }
}

export default React.memo(EntryPage)
