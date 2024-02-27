import ArticleContainer from '@components/ArticleContainer'
import Banner from '@components/Banner'
import Keywords from '@components/Common/Keywords'
import { KeywordsProps } from '@components/Common/Keywords/Keywords.types'
import ProjectCarousel from '@components/ProjectCarousel'
import VideoPlayer from '@components/VideoPlayer'
import { PageDataProps } from 'src/types/page'

const TextPage = (props: PageDataProps) => {
    const { pageContentCollection } = props

    const loadComponent = (componentType: string, pageItem: KeywordsProps) => {
        switch (componentType) {
            case 'banner':
                return <Banner key={pageItem.id} {...pageItem} />
            case 'keywordsContainer':
                return <Keywords key={pageItem.id} {...pageItem} />
            case 'carousel':
                return <ProjectCarousel key={pageItem.id} {...pageItem} />
            case 'articleContainer':
                return <ArticleContainer key={pageItem.id} {...pageItem} />
            case 'videoPlayer':
                return <VideoPlayer key={pageItem.id} {...pageItem} />
            default:
                return <></>
        }
    }
    return (
        <>
            {pageContentCollection.items.map((pageItem: KeywordsProps) => {
                return loadComponent(pageItem.__typename__, pageItem)
            })}
        </>
    )
}

export default TextPage
