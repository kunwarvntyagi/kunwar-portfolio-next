import React from "react"
import styles from "./styles/HeaderMobile-tw-styles"

const MenuSlotMobileItem = ({ menuSlot }) => {
  return (
    <React.Fragment>
      <div className={styles.menuSlotButton}>{menuSlot?.title}</div>
      <div className={styles.subItemWrapper}>
        {' '}
        {menuSlot?.menuItem?.map((item, index) => {
          return (
            <a key={index} className={styles.menuSlotButton} href={item?.fields?.link?.fields?.url}>
              {item?.fields?.title}
            </a>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default MenuSlotMobileItem
