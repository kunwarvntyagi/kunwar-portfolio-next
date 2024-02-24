import React from 'react'
import { PageItemsProps } from 'src/types/page'

const Banner = (props: PageItemsProps) => {
    console.info(props)
    return <p>{'Banner Component'}</p>
}
export default Banner
