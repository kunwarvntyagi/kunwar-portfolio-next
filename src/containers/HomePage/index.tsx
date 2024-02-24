import React, { use, useEffect } from 'react'
import { PageDataProps, PageItemsProps } from '../../types/page'
import Banner from '@components/Banner'

const HomePage = (homePageData: PageDataProps) => {
    const loadComponent = (componentType: string, pageItem: PageItemsProps) => {
        console.info(pageItem)
        switch (componentType) {
            case 'banner':
                return <Banner key={pageItem.id} {...pageItem} />
            default:
                return <></>
        }
    }
    useEffect(() => {
        console.info('loading home')
    }, [])

    return (
        <>
            <p>{'Home Page'}</p>
            {homePageData.pageContentCollection.items.map(
                (pageItem: PageItemsProps) => {
                    return loadComponent(pageItem.__typename__, pageItem)
                },
            )}
        </>
    )
}

export default HomePage
