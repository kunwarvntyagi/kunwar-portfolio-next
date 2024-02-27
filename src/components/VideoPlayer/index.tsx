import classNames from 'classnames'
import { VideoPlayerProps } from './VideoPlayer.types'
import { videoPlayerStyles } from './VideoPlayer.styles'

const VideoPlayer = ({ url, additionalStyle }: VideoPlayerProps) => {
    return (
        <div className={classNames(videoPlayerStyles.container)}>
            <iframe
                width="560"
                className={additionalStyle}
                height="315"
                src={url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoPlayer
