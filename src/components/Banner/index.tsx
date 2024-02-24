import classnames from 'classnames'
import React from 'react'
import { PageItemsProps } from 'src/types/page'
import { bannerStyles } from './Banner.styles'
import Typography from '@components/Typography'
import MouseAnimation from '@components/Common/MouseAnimation'
import Picture from '@components/Common/Picture'

const Banner = (props: PageItemsProps) => {
    const { content, bannerType, bannerBgColor, image, callToAction } = props

    return (
        <div
            className={classnames(
                'Banner',
                bannerStyles[bannerType].container,
                bannerBgColor,
            )}
        >
            <div className={bannerStyles[bannerType].contentContainer}>
                {content.heading && (
                    <Typography
                        className={bannerStyles[bannerType].heading}
                        component={content.headingType}
                        markdown={content.heading}
                        noDisallowedTypes={true}
                    />
                )}
                {content.subHeading && (
                    <Typography
                        className={bannerStyles[bannerType].subHeading}
                        component={'div'}
                        markdown={content.subHeading}
                        noDisallowedTypes={true}
                    />
                )}
                {callToAction.link && (
                    <a
                        target={callToAction.target}
                        href={callToAction.link.url}
                        className={bannerStyles.button}
                    >
                        {callToAction.linkText}
                    </a>
                )}
            </div>
            <div className={bannerStyles[bannerType].imageContainer}>
                {image.dtImage && (
                    <Picture
                        dtImage={image.dtImage}
                        spImage={image.spImage}
                        className={classnames(
                            bannerStyles[bannerType].image,
                            image.additionalStyle,
                        )}
                    />
                )}
            </div>
            <MouseAnimation />
        </div>
    )
}
export default Banner
