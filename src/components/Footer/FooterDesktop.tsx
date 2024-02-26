import classNames from 'classnames'
import MenusDesktop from './MenusDesktop'
import SocialLinksDesktop from './SocialLinksDesktop'
import styles from './styles/Footer-tw-styles'
import { FooterProps } from './types/Footer.types'
import Image from 'next/image'

const FooterDesktop = (props: FooterProps) => {
    const { footerData } = props

    return (
        <div
            className={classNames(styles.footerDesktop.wrapper)}
            role="contentinfo"
        >
            <div id="logoContainer">
                <a href={footerData?.footerLogo?.link} className={styles.logo}>
                    <Image
                        src={footerData?.footerLogo?.image?.url}
                        alt={footerData.footerLogo?.title}
                        className={styles.logoImage}
                        width={footerData?.footerLogo?.image?.width}
                        height={footerData?.footerLogo?.image?.height}
                    />
                </a>
            </div>
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
                <div className={styles.footerDesktop.copyrightText}>
                    {'Handcrafted by me © kvnt'}
                </div>
            </div>
        </div>
    )
}

export default FooterDesktop
