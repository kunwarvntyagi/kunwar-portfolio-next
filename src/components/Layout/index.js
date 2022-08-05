import { useEffect, useState } from 'react'
import useScreenSize from '../../helpers/hooks/useScreenSize'
import Header from '../Header'

const Layout = ({ headerData, children }) => {
  const [isMobile, setIsMobile] = useState(false)
  const screen = useScreenSize()

  useEffect(() => {
    setIsMobile(screen?.isMobile || screen?.isTablet)
  }, [screen])

  return (
    <>
      <Header isMobile={isMobile} headerData={headerData} />
      <main id="mainContainer">{children}</main>
    </>
  )
}

export default Layout
