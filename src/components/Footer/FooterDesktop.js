import classNames from 'classnames'
import MenusDesktop from './MenusDesktop'
import SocialLinksDesktop from './SocialLinksDesktop'
import styles from './styles/Footer-tw-styles'

const FooterDesktop = (props) => {
  return (
    <div
      className={classNames(styles.footerDesktop.wrapper)}
      role="contentinfo"
    >
      <div className={styles.footerDesktop.container}>
        <div className={styles.footerDesktop.bottomWrapper}>
          <MenusDesktop {...props} />
          <div className={styles.footerDesktop.menuList}>
            <div className={styles.footerDesktop.socialMediaLinks}>
              <ul className="flex">
                <SocialLinksDesktop {...props} />
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.footerDesktop.horizontalLine} />
          <div className={styles.footerDesktop.copyrightText}>{'Handcrafted by me © kvnt'}</div>
      </div>
    </div>
  )
}

export default FooterDesktop
