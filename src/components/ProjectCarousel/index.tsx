import ProjectCard from '@components/ProjectCard'
import { ProjectCardProps, ProjectCarouselProps } from './ProjectCarousel.types'
import Slider from 'react-slick'
import { ProjectCarouselSettings } from 'src/constants/CarouselSettings'

const ProjectCarousel = (props: ProjectCarouselProps) => {
    const { content } = props

    const settings = ProjectCarouselSettings

    const prepareCards = content.map(
        (card: ProjectCardProps, index: number) => {
            return <ProjectCard key={index} {...card} />
        },
    )

    const renderCards = (cards: React.JSX.Element[]) => {
        return <Slider {...settings}>{cards}</Slider>
    }

    return (
        <div className="relative">
            <div className="flex w-full justify-between project-carousel-container">
                {renderCards(prepareCards)}
            </div>
        </div>
    )
}

export default ProjectCarousel
