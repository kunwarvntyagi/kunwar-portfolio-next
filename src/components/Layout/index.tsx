import { useEffect, useState } from 'react'
import useScreenSize from '../../helpers/hooks/useScreenSize'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ headerData, children, footerData }) => {
    const [isMobile, setIsMobile] = useState(false)
    const screen = useScreenSize()

    useEffect(() => {
        setIsMobile(screen?.isMobile || screen?.isTablet)
    }, [screen])

    return (
        <>
            <Header isMobile={isMobile} headerData={headerData} />
            <main id="mainContainer">{children}</main>
            <Footer isMobile={isMobile} footerData={footerData} />
        </>
    )
}

export default Layout
