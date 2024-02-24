import Image from 'next/image'
import { useState } from 'react'
// import LazyLoad from 'react-lazyload'
import { loader } from '../../helpers/image.helper'

const Media = ({
  className,
  src,
  altText,
  width,
  lazyload,
  lazyloadOffset,
  height,
  ...other
}) => {
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
