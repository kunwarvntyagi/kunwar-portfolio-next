export type KeywordsProps = {
    __typename__: string
    name: string
    id: string
    heading?: {
        heading?: string
        headingType?: string
        subHeading?: string
    }
    keywords?: Keywords[]
}

type Keywords = {
    title: string
    url?: string
}
