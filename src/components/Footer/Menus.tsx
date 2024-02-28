import React from 'react'
import styles from './styles/Footer-tw-styles'
import { FooterMenu, FooterProps } from './types/Footer.types'
import classNames from 'classnames'
import LinkButton from '@components/Common/LinkButton'

const Menus = ({ footerData, isMobile }: FooterProps) => {
    const { footerMenuCollection } = footerData
    return (
        <React.Fragment>
            <div className={classNames(isMobile ? '' : 'w-2/3')}>
                <ul>
                    {footerMenuCollection?.map(
                        (footerMenu: FooterMenu, index: number) => {
                            return (
                                <li
                                    key={index}
                                    className={styles.footerDesktop.menuList}
                                >
                                    <LinkButton
                                        {...footerMenu}
                                        className={
                                            styles.footerDesktop.menuLink
                                        }
                                    >
                                        {footerMenu?.title}
                                    </LinkButton>
                                </li>
                            )
                        },
                    )}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Menus
