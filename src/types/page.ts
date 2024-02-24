export type PageDataProps = {
    pageContentCollection: PageContentCollectionProps
}

export type PageContentCollectionProps = {
    items: PageItemsProps[]
}

export type PageItemsProps = {
    name: string
    __typename__: string
    id?: string | number
    image?: CtImageProps
    content?: CtContent
    textAlign?: string
}

export type CtImageProps = {
    name: string
    altText: string
    spImage: ImageObject
    dtImage: ImageObject
}

export type ImageObject = {
    title: string
    description: string
    file: object
}

export type CtContent = {
    heading?: string
    headingType?: string
    subHeading?: string
}

export type HomePageDataProps = {
    homePageData: PageDataProps
}
