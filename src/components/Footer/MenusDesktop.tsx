import React from 'react'
import styles from './styles/Footer-tw-styles'
import { FooterMenu, FooterProps } from './types/Footer.types'

const MenusDesktop = ({ footerData }: FooterProps) => {
    const { footerMenuCollection } = footerData
    return (
        <React.Fragment>
            <div className="w-2/3">
                <ul>
                    {footerMenuCollection?.map(
                        (footerMenu: FooterMenu, index: number) => {
                            return (
                                <li
                                    key={index}
                                    className={styles.footerDesktop.menuList}
                                >
                                    <a
                                        href={footerMenu?.link?.url}
                                        className={
                                            styles.footerDesktop.menuLink
                                        }
                                    >
                                        {footerMenu?.title}
                                    </a>
                                </li>
                            )
                        },
                    )}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default MenusDesktop
