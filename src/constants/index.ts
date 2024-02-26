import { PageMetadataProps } from '@components/Common/PageMetadata/PageMetadata.types'
import { ImageObject, PageItemsProps } from 'src/types/page'

export const LANG: string = 'en-us'

export const HABURGER_IMAGE: string =
    'https://images.ctfassets.net/sv934u8dkza5/6mgLNLHryHvaszLS8hO2sG/d0a3f929c075c4aa606247997d3cee46/Hamburger_icon.svg.png?fm=webp'
export const HABURGER_IMAGE_OPEN: string =
    'https://images.ctfassets.net/sv934u8dkza5/7xy0TfEu2lQsguLyVr5LVC/308f13525285f9a586050f73ab4313b3/png-transparent-computer-icons-share-icon-hamburger-button-crossed-logo-share-icon-symbol-thumbnail.png?fm=webp'

export const SITE_TITLE: string =
    'Kunwar Vashistha Narayan Tyagi | kvnt1102 | Frontend Developer'
export const SITE_DESCRIPTION: string = `This is kunwarvntyagi's portfolio`

export const sizes = {
    dtBreakpointMin: '992px',
    spBreakpointMax: '767px',
}

export const PLUS_IMAGE: ImageObject = {
    title: 'Plus Image',
    description: 'Plus Image',
    file: {
        url: 'https://static-00.iconduck.com/assets.00/plus-icon-512x512-1ksw3ncc.png',
        details: {
            image: {
                width: 15,
                height: 15,
            },
        },
    },
}

export const MINUS_IMAGE: ImageObject = {
    title: 'Minus Image',
    description: 'Minus Image',
    file: {
        url: 'https://pngimg.com/d/minus_PNG41.png',
        details: {
            image: {
                width: 15,
                height: 15,
            },
        },
    },
}

export const ERROR_PAGE_BANNER_DATA: PageItemsProps = {
    bannerType: 'Error',
    bannerBgColor: 'bg-heroColor',
    __typename__: 'banner',
    name: '404 Banner',
    image: {
        dtImage: null,
        name: null,
        altText: null,
        spImage: null,
    },
    content: {
        heading: 'Oops!',
        headingType: 'h1',
        subHeading: `The page you are looking for doesn't exist. Try starting from the home page`,
    },
    callToAction: {
        linkText: 'HOMEPAGE',
        link: {
            url: '/',
        },
        target: '_self',
    },
}

export const ERROR_PAGE_METADATA: PageMetadataProps = {
    title: '404 Error | Kunwar Vashistha Narayan Tyagi',
    description: '404 Error Page',
    keywords: 'error,404',
    type: 'Error Page',
}
