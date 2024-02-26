import { KeywordsProps } from '@components/Common/Keywords/Keywords.types'

export type PageDataProps = {
    pageContentCollection: PageContentCollectionProps
}

export type PageContentCollectionProps = {
    items?: PageItemsProps[] | KeywordsProps[]
}

export type PageItemsProps = {
    name: string
    __typename__: string
    id?: string | number
    image?: CtImageProps
    content?: CtContent
    bannerType?: string
    bannerBgColor?: string
    bgImage?: CtImageProps
    callToAction?: CtActionButton
    showMouseAnim?: boolean
}

export type CtActionButton = {
    link?: {
        title?: string
        url?: string
    }
    linkText?: string
    name?: string
    target?: string
}

export type CtImageProps = {
    name: string
    altText: string
    spImage: ImageObject
    dtImage: ImageObject
    additionalStyle?: string
}

export type ImageObject = {
    title: string
    description: string
    file: ImageFile
}

type ImageFile = {
    url?: string
    contentType?: string
    fileName?: string
    details?: ImageDetails
}

type ImageDetails = {
    size?: number
    image?: {
        height?: number
        width?: number
    }
}

export type CtContent = {
    heading?: string
    headingType?: string
    subHeading?: string
}

export type HomePageDataProps = {
    pageData: PageDataProps
}
