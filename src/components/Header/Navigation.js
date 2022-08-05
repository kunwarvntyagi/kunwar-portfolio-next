import classNames from 'classnames'
import { useEffect, useState } from 'react'
import MenuSlotsMobile from './MenuSlotMobile'
import styles from './styles/HeaderMobile-tw-styles'

const Navigation = (props) => {
  const { className, menuOpen, menu } = props
  const [screenWidth, setScreenWidth] = useState('')

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth)
  }

  return (
    <div itemScope className={classNames(className, styles.mainWrapper)}>
      <div
        className={classNames(
          menuOpen
            ? styles.navbarWrapperMobileOpen
            : styles.navbarWrapperMobile,
        )}
      >
        <MenuSlotsMobile menuSlots={menu?.[0]?.menuItemCollection} />
      </div>
    </div>
  )
}

export default Navigation
