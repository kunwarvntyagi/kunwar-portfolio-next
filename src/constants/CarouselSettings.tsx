import Arrow from '@components/Common/Arrow'
import { Settings } from 'react-slick'
import { commonStyles } from '../components/Common/styles/Common.styles'

export const ProjectCarouselSettings: Settings = {
    arrows: true,
    className: 'react-center',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    infinite: false,
    dots: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                arrows: false,
                dots: true,
                draggable: true,
                initialSlide: 0,
            },
        },
    ],
    prevArrow: (
        <Arrow name="Previous">
            <span className={commonStyles.prevArrow} />
        </Arrow>
    ),
    nextArrow: (
        <Arrow name="Next">
            <span className={commonStyles.nextArrow} />
        </Arrow>
    ),
}
