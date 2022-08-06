import React from 'react'
import styles from './styles/Footer-tw-styles'

const MenusMobile = (props) => {
  return (
    <React.Fragment>
      <ul>
        {props?.footerData?.footerMenuCollection?.map((footerMenu, index) => {
          return (
            <li key={index} className={styles.footerDesktop.menuList}>
              <a
                href={footerMenu?.link?.url}
                className={styles.footerDesktop.menuLink}
              >
                {footerMenu?.title}
              </a>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default MenusMobile
