import Breadcrumb from '@components/Common/Breadcrumb'
import { PageDataProps } from 'src/types/page'

const ProjectListingPage = (props: PageDataProps) => {
    console.info(props)
    const { breadcrumbs } = props
    return (
        <>
            {props.breadcrumbs.length > 0 && (
                <Breadcrumb breadcrumbs={breadcrumbs} />
            )}
            <p>{'Project Listing Page'}</p>
        </>
    )
}

export default ProjectListingPage
