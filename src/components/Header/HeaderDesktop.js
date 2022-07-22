import classNames from 'classnames'
import Media from '../Media'
import styles from './styles/HeaderDesktop-tw-styles'

const HeaderDesktop = ({ data }) => {
  const { headerLogo, headerMenuCollection } = data
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
                      <a
                        className={styles.menuItem}
                        href={mainMenuItem?.link?.url}
                      >
                        {mainMenuItem?.title}
                      </a>
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
