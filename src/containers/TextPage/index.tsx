import Banner from '@components/Banner'
import Keywords from '@components/Common/Keywords'
import { KeywordsProps } from '@components/Common/Keywords/Keywords.types'
import { PageDataProps } from 'src/types/page'

const TextPage = (props: PageDataProps) => {
    const { pageContentCollection } = props

    const loadComponent = (componentType: string, pageItem: KeywordsProps) => {
        switch (componentType) {
            case 'banner':
                return <Banner key={pageItem.id} {...pageItem} />
            case 'keywordsContainer':
                return <Keywords key={pageItem.id} {...pageItem} />
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
