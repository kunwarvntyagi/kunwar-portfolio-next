import classnames from 'classnames'
import { useState } from 'react'
import Media from '../Media'
import styles from './styles/HeaderDesktop-tw-styles'
import LinkButton from '@components/Common/LinkButton'

const HeaderDesktop = ({ data }) => {
    const { headerLogo, headerMenuCollection } = data
    const [showMenuStyle] = useState('lg:hidden')
    const [eleMenu, setEleMenu] = useState(null)

    const mouseEnter = (e) => {
        const ele = e.target.children[0].classList
        setEleMenu(ele)
        ele.remove('lg:hidden')
    }

    const mouseLeave = () => {
        if (eleMenu && eleMenu !== '') {
            eleMenu.add('lg:hidden')
        }
    }

    return (
        <header id="headerMenu">
            <nav id="navbar" className={styles.navBar}>
                <div className={classnames(styles.navBarWrapper)}>
                    <div className={styles.headerLogo}>
                        <LinkButton
                            url={headerLogo?.link}
                            className="flex justify-center items-center gap-[20px]"
                        >
                            <Media
                                src={headerLogo?.imamge}
                                altText={headerLogo?.title}
                                className={styles.logoImage}
                            />
                            <p className={styles.logoName}>{'Kunwar'}</p>
                        </LinkButton>
                    </div>
                    <div className={styles.menuWrapperDesktop}>
                        <ul className="flex">
                            {headerMenuCollection?.[0]?.menuItemCollection?.map(
                                (mainMenuItem, index) => {
                                    return (
                                        <li key={index}>
                                            {!mainMenuItem?.link?.url ? (
                                                <div
                                                    className={
                                                        styles.menuItemHover
                                                    }
                                                    // href={
                                                    //     mainMenuItem?.link?.url
                                                    // }
                                                >
                                                    <div
                                                        id={index}
                                                        key={index}
                                                        onMouseEnter={
                                                            mouseEnter
                                                        }
                                                        onMouseLeave={
                                                            mouseLeave
                                                        }
                                                        className={
                                                            styles.menuItem
                                                        }
                                                    >
                                                        {mainMenuItem?.title}
                                                        {mainMenuItem?.menuItem
                                                            ?.length > 0 && (
                                                            <div
                                                                id={`MegaMenu${index}`}
                                                                className={classnames(
                                                                    styles.menuComponentDivClass,
                                                                    showMenuStyle,
                                                                )}
                                                                onMouseLeave={
                                                                    mouseLeave
                                                                }
                                                                aria-hidden={
                                                                    'true'
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        styles.childComponentDivClass
                                                                    }
                                                                >
                                                                    <ul>
                                                                        {mainMenuItem?.menuItem?.map(
                                                                            (
                                                                                menuListItem,
                                                                                ind,
                                                                            ) => {
                                                                                return (
                                                                                    <LinkButton
                                                                                        key={
                                                                                            ind
                                                                                        }
                                                                                        className={
                                                                                            styles.menuListItem
                                                                                        }
                                                                                        url={
                                                                                            menuListItem
                                                                                                ?.fields
                                                                                                ?.link
                                                                                                ?.fields
                                                                                                ?.url
                                                                                        }
                                                                                    >
                                                                                        <li
                                                                                            key={
                                                                                                ind
                                                                                            }
                                                                                            className={
                                                                                                styles.meunList
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                menuListItem
                                                                                                    ?.fields
                                                                                                    ?.title
                                                                                            }
                                                                                        </li>
                                                                                    </LinkButton>
                                                                                )
                                                                            },
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                <LinkButton
                                                    className={
                                                        styles.menuItemHover
                                                    }
                                                    url={
                                                        mainMenuItem?.link?.url
                                                    }
                                                >
                                                    {mainMenuItem?.title}
                                                </LinkButton>
                                            )}
                                        </li>
                                    )
                                },
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderDesktop
