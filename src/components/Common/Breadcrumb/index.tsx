import { BreadcrumbDataProps, BreadcrumbProps } from './Breadcrumb.types'
import { breadcrumbStyles } from './Breadcrumb.styles'
import LinkButton from '../LinkButton'

const Breadcrumb = (props: BreadcrumbDataProps) => {
    const { breadcrumbs } = props
    return (
        <div className={breadcrumbStyles.container}>
            {breadcrumbs.map((bread: BreadcrumbProps, index: number) => {
                return index === breadcrumbs.length - 1 ? (
                    <p className={breadcrumbStyles.breadcrumb} key={index}>
                        {bread.title}
                    </p>
                ) : (
                    <LinkButton
                        key={index}
                        className={breadcrumbStyles.breadcrumblink}
                        {...bread}
                    >
                        {bread.title}
                    </LinkButton>
                )
            })}
        </div>
    )
}

export default Breadcrumb
