import classNames from 'classnames'
import { useState } from 'react'
import styles from './styles/HeaderMobile-tw-styles'
import Media from '../Media'
import constants from '../../constants'
import Navigation from './Navigation'

const HeaderMobile = ({ data }) => {
  const { headerLogo, headerMenuCollection } = data
  const [menuOpen, setMenuOpen] = useState(false)
  const [hideNav, setHideNav] = useState(true)

  const hamburgerClick = () => {
    setMenuOpen(!menuOpen)
    !menuOpen ? setHideNav(false) : setHideNav(true)
  }

  return (
    <div role="banner" className={styles.headerContainer}>
      <div id="header-section" className="block lg:hidden">
        <div
          id="headerMenu"
          className={classNames(
            menuOpen ? styles.navbarWrapperOpen : styles.navbarWrapper,
            'bg-blue',
          )}
        >
          <div
            id="headerWrapper"
            className={classNames(styles.headerContainer)}
          >
            <div className={styles.brandLogoWrapper}>
              <a href={headerLogo?.link}>
                <Media src={headerLogo?.imamge} altText={headerLogo?.title} />
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.hamburgerWrapper}>
                {headerMenuCollection && (
                  <button
                    id="hamburgerIcon"
                    onClick={hamburgerClick}
                    className={classNames(
                      menuOpen ? styles.hamburgerOpen : styles.hamburger,
                    )}
                  >
                    <img
                      className={styles.hamburgerIcon}
                      src={
                        menuOpen
                          ? constants.images.hamburgerOpen
                          : constants.images.hamburger
                      }
                      alt={'hamburgerIcon'}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Navigation
          className={hideNav ? 'hidden' : ''}
          menuOpen={menuOpen}
          menu={headerMenuCollection}
          handleClose={hamburgerClick}
        />
      </div>
    </div>
  )
}

export default HeaderMobile
