import { KeywordsProps } from './Keywords.types'
import Typography from '@components/Typography'
import { keywordsStyles } from './Keywords.styles'

const Keywords = (props: KeywordsProps) => {
    const { heading, keywords } = props
    return (
        <div className={keywordsStyles.container}>
            <div className={keywordsStyles.headingContainer}>
                {heading.heading && (
                    <Typography
                        className={keywordsStyles.heading}
                        component={heading.headingType}
                        markdown={heading.heading}
                        noDisallowedTypes={true}
                    />
                )}
                {heading.subHeading && (
                    <Typography
                        className={keywordsStyles.subHeading}
                        component={'div'}
                        markdown={heading.subHeading}
                        noDisallowedTypes={true}
                    />
                )}
            </div>
            <div className={keywordsStyles.keywordContainer}>
                {keywords.map(
                    (keyword: { title: string; url: string }, idx: number) => {
                        return keyword.url ? (
                            <a
                                className={keywordsStyles.keyword}
                                href={keyword.url}
                                key={idx}
                            >
                                {keyword.title}
                            </a>
                        ) : (
                            <div
                                className={keywordsStyles.keywordLink}
                                key={idx}
                            >
                                {keyword.title}
                            </div>
                        )
                    },
                )}
            </div>
        </div>
    )
}

export default Keywords
