import React from 'react'
import styles from './styles/Footer-tw-styles'

const MenusDesktop = (props) => {
  return (
    <React.Fragment>
      <div className="w-2/3">
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
      </div>
    </React.Fragment>
  )
}

export default MenusDesktop
