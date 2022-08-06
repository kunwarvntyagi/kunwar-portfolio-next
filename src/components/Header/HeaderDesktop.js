import classNames from 'classnames'
import { useState } from 'react'
import Media from '../Media'
import styles from './styles/HeaderDesktop-tw-styles'

const HeaderDesktop = ({ data }) => {
  const { headerLogo, headerMenuCollection } = data
  const [showMenuStyle, setShowMenuStyle] = useState('lg:hidden')
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
        <div className={classNames(styles.navBarWrapper)}>
          <div className={styles.headerLogo}>
            <a href={headerLogo?.link}>
              <Media src={headerLogo?.imamge} altText={headerLogo?.title} />
            </a>
          </div>
          <div className={styles.menuWrapperDesktop}>
            <ul className="flex">
              {headerMenuCollection?.[0]?.menuItemCollection?.map(
                (mainMenuItem, index) => {
                  return (
                    <li key={index}>
                      {!mainMenuItem?.link?.url ? (
                        <div
                          className={styles.menuItem}
                          href={mainMenuItem?.link?.url}
                        >
                          <div
                            id={index}
                            key={index}
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            className={styles.menuItem}
                          >
                            {mainMenuItem?.title}
                            {mainMenuItem?.menuItem?.length > 0 && (
                              <div
                                id={`MegaMenu${index}`}
                                className={classNames(
                                  styles.menuComponentDivClass,
                                  showMenuStyle,
                                )}
                                onMouseLeave={mouseLeave}
                                aria-hidden={'true'}
                              >
                                <div className={styles.childComponentDivClass}>
                                  <ul>
                                    {mainMenuItem?.menuItem?.map(
                                      (menuListItem, ind) => {
                                        return (
                                          <li
                                            key={ind}
                                            className={styles.meunList}
                                          >
                                            <a
                                              key={ind}
                                              className={styles.menuListItem}
                                              href={
                                                menuListItem?.fields?.link
                                                  ?.fields?.url
                                              }
                                            >
                                              {menuListItem?.fields?.title}
                                            </a>
                                          </li>
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
                        <a
                          className={styles.menuItem}
                          href={mainMenuItem?.link?.url}
                        >
                          {mainMenuItem?.title}
                        </a>
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
