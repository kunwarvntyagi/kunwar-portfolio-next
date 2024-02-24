export const fetchData = (__typename__, fields) => {
    const content = fields.fields
    switch(__typename__) {
        case 'banner': 
            return {
                __typename__: __typename__,
                name: content.name,
                content: content.content.fields,
                image: {
                    name: content.image.fields.name,
                    altText: content.image.fields.altText,
                    spImage: content.image.fields.spImage.fields,
                    dtImage: content.image.fields.dtImage.fields
                },
                textAlign: content.textAlign,
                id: fields.sys.id
            }
    }
}