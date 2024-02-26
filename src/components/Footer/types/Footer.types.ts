export type FooterProps = {
    isMobile?: boolean
    footerData?: {
        footerMenuCollection?: FooterMenu[]
        footerSocialCollection?: FooterSocial[]
        footerLogo?: FooterLogo
    }
}

export type FooterMenu = {
    link?: {
        title?: string
        url?: string
    }
    title?: string
}

export type FooterLogo = {
    link?: string
    title?: string
    image?: {
        url?: string
        width?: number
        height?: number
    }
}

export type FooterSocial = {
    link?: string
    image?: {
        url?: string
        width?: number
        height?: number
    }
    target?: string
    title?: string
}
