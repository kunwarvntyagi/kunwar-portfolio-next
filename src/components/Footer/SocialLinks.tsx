import React from 'react'
import styles from './styles/Footer-tw-styles'
import { FooterProps, FooterSocial } from './types/Footer.types'
import Image from 'next/image'

const SocialLinks = ({ footerData, isMobile }: FooterProps) => {
    const { footerSocialCollection } = footerData
    const socialStyle = isMobile ? styles.footerMobile : styles.footerDesktop
    return (
        <React.Fragment>
            {footerSocialCollection?.map(
                (socialMenu: FooterSocial, index: number) => {
                    return (
                        <li key={index}>
                            <a
                                href={socialMenu?.link}
                                target={socialMenu?.target}
                                className={socialStyle.socialIconLink}
                            >
                                <Image
                                    src={socialMenu?.image?.url}
                                    alt={socialMenu?.title}
                                    className={socialStyle.socialIcon}
                                    width={socialMenu?.image?.width}
                                    height={socialMenu?.image?.height}
                                />
                            </a>
                        </li>
                    )
                },
            )}
        </React.Fragment>
    )
}

export default SocialLinks
