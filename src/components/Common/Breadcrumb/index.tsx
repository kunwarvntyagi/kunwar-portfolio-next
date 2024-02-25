import { BreadcrumbDataProps, BreadcrumbProps } from './Breadcrumb.types'
import { breadcrumbStyles } from './Breadcrumb.styles'

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
                    <a
                        key={index}
                        className={breadcrumbStyles.breadcrumblink}
                        href={bread.url}
                    >
                        {bread.title}
                    </a>
                )
            })}
        </div>
    )
}

export default Breadcrumb
