import classNames from 'classnames'
import { FooterProps } from './types/Footer.types'
import styles from './styles/Footer-tw-styles'
import Image from 'next/image'
import Menus from './Menus'
import SocialLinks from './SocialLinks'

const Footer = (props: FooterProps) => {
    const { footerData, isMobile } = props

    const footerStyle = isMobile ? styles.footerMobile : styles.footerDesktop
    return (
        <>
            <div className={classNames(footerStyle.wrapper)} role="contentinfo">
                <div id="logoContainer">
                    <a
                        href={footerData?.footerLogo?.link}
                        className={styles.logo}
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={footerData?.footerLogo?.image?.url}
                            alt={footerData.footerLogo?.title}
                            className={styles.logoImage}
                            width={footerData?.footerLogo?.image?.width}
                            height={footerData?.footerLogo?.image?.height}
                        />
                    </a>
                </div>
                <div className={footerStyle.container}>
                    <div className={footerStyle.bottomWrapper}>
                        <Menus {...props} />
                        <div className={footerStyle.menuList}>
                            {isMobile ? (
                                <div
                                    className={classNames(
                                        styles.footerMobile.socialConnect,
                                        styles.footerMobile.menuList,
                                    )}
                                >
                                    <ul className="flex justify-center">
                                        <SocialLinks {...props} />
                                    </ul>
                                </div>
                            ) : (
                                <div
                                    className={classNames(
                                        styles.footerDesktop.socialMediaLinks,
                                    )}
                                >
                                    <ul className="flex">
                                        <SocialLinks {...props} />
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr className={footerStyle.horizontalLine} />
                    <div className={footerStyle.copyrightText}>
                        {'Handcrafted by me © kvnt'}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
