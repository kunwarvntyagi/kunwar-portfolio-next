import Image from 'next/image'
// import LazyLoad from 'react-lazyload'
import { loader } from '../../helpers/image.helper'
import { MediaProps } from './Media.types'

const Media = ({
    className,
    src,
    altText,
    width,
    // lazyload,
    // lazyloadOffset,
    height,
    ...other
}: MediaProps) => {
    //   const LazyLoadWrapper = (child) => {
    //     lazyload ? <LazyLoad offset={lazyloadOffset}>{child}</LazyLoad> : child
    //   }
    return (
        <Image
            width={width || `100`}
            height={height || `100`}
            src={'https:' + src + '?fm=webp'}
            alt={altText || ''}
            loader={loader}
            className={className || ''}
            {...other}
        />
    )
}

export default Media
