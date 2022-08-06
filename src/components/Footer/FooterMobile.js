import classNames from 'classnames'
import MenusMobile from './MenusMobile'
import SocialLinksMobile from './SocialLinksMobile'
import styles from './styles/Footer-tw-styles'

const FooterMobile = (props) => {
  return (
    <div
      className={classNames(styles.footerMobile.wrapper)}
      role="contentinfo"
    >
      <div className={styles.footerMobile.container}>
        <div className={styles.footerMobile.bottomWrapper}>
          <MenusMobile {...props} />
          <div className={styles.footerMobile.menuList}>
            <div className={classNames(styles.footerMobile.socialConnect, styles.footerMobile.menuList)}>
              <ul className="flex">
                <SocialLinksMobile {...props} />
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.footerMobile.horizontalLine} />
          <div className={styles.footerMobile.copyrightText}>{'Handcrafted by me © kvnt'}</div>
      </div>
    </div>
  )
}

export default FooterMobile
