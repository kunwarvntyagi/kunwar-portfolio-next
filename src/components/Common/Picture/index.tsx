import Head from 'next/head'
import { PictureProps } from './Picture.types'
import { sizes } from 'src/constants'
import useScreenSize from '@helpers/hooks/useScreenSize'
import Image from 'next/image'
import { loader } from '@helpers/image.helper'

const noop = () => undefined

const Picture = (props: PictureProps) => {
    const { dtImage, spImage, className, id, onClick = noop } = props

    const screen = useScreenSize()
    const currentImg = screen?.isDesktop ? dtImage : spImage

    return (
        <>
            <Head>
                {spImage && (
                    <link
                        rel="preload"
                        as="image"
                        href={`${spImage.file.url}`}
                    />
                )}
                {dtImage && (
                    <link
                        rel="preload"
                        as="image"
                        href={`${dtImage.file.url}`}
                    />
                )}
            </Head>
            <picture>
                <source
                    srcSet={dtImage.file.url + '?fm=webp'}
                    width={dtImage.file.details.image.width}
                    height={dtImage.file.details.image.height}
                    type="image/webp"
                    media={`(min-width: ${sizes.dtBreakpointMin})`}
                />
                <source
                    srcSet={spImage.file.url + '?fm=webp'}
                    width={spImage.file.details.image.width}
                    height={spImage.file.details.image.height}
                    type="image/webp"
                    media={`(min-width: ${sizes.spBreakpointMax})`}
                />
                <Image
                    width={currentImg.file.details.image.width}
                    height={currentImg.file.details.image.height}
                    src={currentImg.file.url + '?fm=webp'}
                    alt={currentImg.description}
                    loader={loader}
                    loading="lazy"
                    className={className}
                    onClick={onClick}
                    id={id}
                />
            </picture>
        </>
    )
}

export default Picture
