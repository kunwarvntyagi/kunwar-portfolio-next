import { CtActionButton, CtImageProps } from '../../types/page'

export type ProjectCarouselProps = {
    id: string
    name?: string
    __typename__?: string
    content?: ProjectCardProps[]
}

export type ProjectCardProps = {
    id: string
    name?: string
    image?: CtImageProps
    __typename__?: string
    callToAction?: CtActionButton
    heading?: {
        heading?: string
        headingType?: string
        subHeading?: string
    }
}
