export type MediaProps = {
    className?: string
    src: string
    altText: string
    width?: number | `${number}`
    lazyload?: boolean
    lazyloadOffset?: number | `${number}`
    height?: number | `${number}`
}
