import styles from './styles/HeaderMobile-tw-styles'
import { memo } from 'react'
import Accordion from '../Accordion/Accordion'
import MenuSlotMobileItem from './MenuSlotMobileItem'

const MenuSlotsMobile = (props) => {
  const { menuSlots } = props
  let wrapperRef = 'menuSlotMobileWrapper'

  return (
    <div id={wrapperRef} className={styles.wrapper}>
      <div id="MobileNavigation">
        {/* <Accordion parentElement={wrapperRef} className={styles.accordionWrapper}>
            {(selectedIndex, setIndex) => { */}
        {menuSlots.map((menuSlot, index) => {
          const isSelected = true
          {
            console.info(menuSlot)
          }
          return menuSlot?.menuItem?.length > 0 ? (
            <MenuSlotMobileItem menuSlot={menuSlot} />
          ) : (
            <a
              href={menuSlot?.link?.url}
              key={index}
              className={styles.menuSlotButton}
            >
              {menuSlot?.title}
            </a>
          )
        })}
        {/* }}
        </Accordion> */}
      </div>
    </div>
  )
}

export default memo(MenuSlotsMobile)
