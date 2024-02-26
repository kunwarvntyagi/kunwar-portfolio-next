export const fetchData = (__typename__, fields) => {
    const content = fields.fields
    switch(__typename__) {
        case 'banner': 
            return {
                __typename__: __typename__,
                name: content.name,
                content: content.content.fields,
                image: {
                    name: content?.image?.fields?.name || null,
                    altText: content?.image?.fields?.altText || null,
                    spImage: content?.image?.fields?.spImage?.fields || null,
                    dtImage: content?.image?.fields?.dtImage?.fields || null,
                    additionalStyle: content?.image?.fields?.additionalStyle || null,
                },
                bannerType: content.bannerType,
                bannerBgColor: content.bannerBgColor,
                bgImage: {
                    name: content?.bgImage?.fields?.name || null,
                    altText: content?.bgImage?.fields?.altText || null,
                    spImage: content?.bgImage?.fields?.spImage?.fields || null,
                    dtImage: content?.bgImage?.fields?.dtImage?.fields || null,
                    additionalStyle: content?.bgImage?.fields?.additionalStyle || null,
                },
                id: fields.sys.id,
                showMouseAnim: content.showMouseAnim || false,
                callToAction: {
                    ...content?.callToAction?.fields || null,
                    link: content?.callToAction?.fields?.link?.fields || null,
                }
            }
        case 'keywordsContainer' :
            let keylists = []
            content.keywords.map((keylist) => keylists.push(keylist.fields))
            return {
                __typename__: __typename__,
                name: content.name,
                heading: {
                    ...content.heading.fields
                },
                keywords: keylists,
                id: fields.sys.id,
            }
        case 'carousel':
            let carouselContent = []
            content.content.map((item) => {
                carouselContent.push(fetchData(item.sys.contentType.sys.id, item))
            })
            return {
                __typename__: __typename__,
                name: content.name,
                id: fields.sys.id,
                content: carouselContent
            }
        case 'projectCard':
            return {
                __typename__: __typename__,
                name: content.name,
                id: fields.sys.id,
                callToAction: {
                    ...content?.callToAction?.fields || null,
                    link: content?.callToAction?.fields?.link?.fields || null,
                },
                image: {
                    name: content?.image?.fields?.name || null,
                    altText: content?.image?.fields?.altText || null,
                    spImage: content?.image?.fields?.spImage?.fields || null,
                    dtImage: content?.image?.fields?.dtImage?.fields || null,
                    additionalStyle: content?.image?.fields?.additionalStyle || null,
                },
                heading: {
                    ...content.heading.fields
                },
            }
        case 'articleContainer':
            return {
                __typename__: __typename__,
                id: fields.sys.id,
                title: content.title,
                text: content.text,
                additionalStyle: content.additionalStyle | ''
            }

    }
}