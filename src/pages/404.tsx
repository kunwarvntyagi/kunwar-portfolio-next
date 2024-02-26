import Banner from '@components/Banner'
import PageMetaData from '@components/Common/PageMetadata'
import { ERROR_PAGE_BANNER_DATA, ERROR_PAGE_METADATA } from 'src/constants'

const ErrorPage = () => {
    return (
        <>
            <PageMetaData {...ERROR_PAGE_METADATA} />
            <Banner {...ERROR_PAGE_BANNER_DATA} />
        </>
    )
}
export default ErrorPage
