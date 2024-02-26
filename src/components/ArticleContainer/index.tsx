import { ArticleProps } from './ArticleContainer.types'
import { articleStyles } from './ArticleContainer.styles'
import Typography from '@components/Typography'

const ArticleContainer = (props: ArticleProps) => {
    const { text, title } = props
    return (
        <div className={articleStyles.container}>
            <Typography
                className={articleStyles.title}
                component={'h3'}
                markdown={title}
                noDisallowedTypes={true}
            />
            <Typography
                className={articleStyles.article}
                component={'div'}
                markdown={text}
                noDisallowedTypes={true}
            />
        </div>
    )
}

export default ArticleContainer
