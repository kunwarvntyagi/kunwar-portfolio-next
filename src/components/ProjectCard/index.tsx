import { projectCardStyles } from './ProjectCard.styles'
import { ProjectCardProps } from '@components/ProjectCarousel/ProjectCarousel.types'
import Picture from '@components/Common/Picture'
import classnames from 'classnames'
import Typography from '@components/Typography'
import LinkButton from '@components/Common/LinkButton'

const ProjectCard = ({ image, heading, callToAction }: ProjectCardProps) => {
    return (
        <div className={projectCardStyles.container}>
            <div className={projectCardStyles.imageContainer}>
                {image && image.dtImage && (
                    <Picture
                        dtImage={image.dtImage}
                        spImage={image.spImage}
                        className={classnames(projectCardStyles.image)}
                    />
                )}
            </div>
            <div className={projectCardStyles.textContainer}>
                {heading.heading && (
                    <Typography
                        className={projectCardStyles.heading}
                        component={heading.headingType}
                        markdown={heading.heading}
                        noDisallowedTypes={true}
                    />
                )}
                {heading.subHeading && (
                    <Typography
                        className={projectCardStyles.subHeading}
                        component={'div'}
                        markdown={heading.subHeading}
                        noDisallowedTypes={true}
                    />
                )}
                {callToAction.link && (
                    <LinkButton
                        {...callToAction}
                        className={projectCardStyles.button}
                    >
                        {callToAction.linkText}
                    </LinkButton>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
