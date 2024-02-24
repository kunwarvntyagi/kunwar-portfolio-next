import classNames from 'classnames'
import { useState } from 'react'
import styles from './styles/HeaderMobile-tw-styles'
import Media from '../Media'
import { HABURGER_IMAGE, HABURGER_IMAGE_OPEN } from '../../constants'
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
                        menuOpen
                            ? styles.navbarWrapperOpen
                            : styles.navbarWrapper,
                        'bg-greenbg',
                    )}
                >
                    <div
                        id="headerWrapper"
                        className={classNames(styles.headerContainer)}
                    >
                        <div className={styles.brandLogoWrapper}>
                            <a
                                href={headerLogo?.link}
                                className="flex justify-center items-center gap-[20px]"
                            >
                                <Media
                                    src={headerLogo?.imamge}
                                    altText={headerLogo?.title}
                                    className={styles.logoImage}
                                />
                                <p className={styles.logoName}>{'Kunwar'}</p>
                            </a>
                        </div>
                        <div className={styles.iconWrapper}>
                            <div className={styles.hamburgerWrapper}>
                                {headerMenuCollection && (
                                    <button
                                        id="hamburgerIcon"
                                        onClick={hamburgerClick}
                                        className={classNames(
                                            menuOpen
                                                ? styles.hamburgerOpen
                                                : styles.hamburger,
                                        )}
                                    >
                                        <img
                                            className={styles.hamburgerIcon}
                                            src={
                                                menuOpen
                                                    ? HABURGER_IMAGE_OPEN
                                                    : HABURGER_IMAGE
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
