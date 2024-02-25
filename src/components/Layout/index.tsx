import { useEffect, useState } from 'react'
import useScreenSize from '../../helpers/hooks/useScreenSize'
import Header from '../Header'
import Footer from '../Footer'
import Breadcrumb from '@components/Common/Breadcrumb'
import PageMetaData from '@components/Common/PageMetadata'

const Layout = ({ headerData, children, footerData, pageInfo }) => {
    const [isMobile, setIsMobile] = useState(false)
    const screen = useScreenSize()

    useEffect(() => {
        setIsMobile(screen?.isMobile || screen?.isTablet)
    }, [screen])

    return (
        <>
            <Header isMobile={isMobile} headerData={headerData} />
            {pageInfo.breadcrumbs && pageInfo.breadcrumbs.length > 0 && (
                <Breadcrumb breadcrumbs={pageInfo.breadcrumbs} />
            )}
            {pageInfo.pageMetadata && (
                <PageMetaData {...pageInfo.pageMetadata} />
            )}
            <main id="mainContainer">{children}</main>
            <Footer isMobile={isMobile} footerData={footerData} />
        </>
    )
}

export default Layout
