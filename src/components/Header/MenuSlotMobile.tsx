import styles from './styles/HeaderMobile-tw-styles'
import { memo } from 'react'
// import Accordion from '../Accordion/Accordion'
import MenuSlotAccordionItem from './MenuSlotAccordionItem'
import Accordion from '@components/Accordion/Accordion'
import { MINUS_IMAGE, PLUS_IMAGE } from 'src/constants'

const MenuSlotsMobile = (props) => {
    const { menuSlots } = props
    const wrapperRef = 'menuSlotMobileWrapper'

    return (
        <div id={wrapperRef} className={styles.wrapper}>
            <div id="MobileNavigation">
                {/* <Accordion parentElement={wrapperRef} className={styles.accordionWrapper}>
            {(selectedIndex, setIndex) => { */}
                {menuSlots.map((menuSlot, index) => {
                    // const isSelected = true
                    // {
                    //   console.info(menuSlot)
                    // }
                    return menuSlot?.menuItem?.length > 0 ? (
                        // <MenuSlotMobileItem key={index} menuSlot={menuSlot} />
                        <Accordion putInViewPort={true}>
                            {(selectedIndex, setIndex) => {
                                const isSelected = selectedIndex === index
                                return (
                                    <MenuSlotAccordionItem
                                        key={index}
                                        menuSlot={menuSlot}
                                        setIndex={setIndex}
                                        isSelected={isSelected}
                                        index={index}
                                        plusImage={PLUS_IMAGE}
                                        minusImage={MINUS_IMAGE}
                                    />
                                )
                            }}
                        </Accordion>
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
