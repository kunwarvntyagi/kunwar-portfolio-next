import styles from './styles/HeaderMobile-tw-styles'
import { memo } from 'react'
import MenuSlotAccordionItem from './MenuSlotAccordionItem'
import Accordion from '@components/Accordion/Accordion'
import { MINUS_IMAGE, PLUS_IMAGE } from 'src/constants'

const MenuSlotsMobile = (props) => {
    const { menuSlots } = props
    const wrapperRef = 'menuSlotMobileWrapper'

    return (
        <div id={wrapperRef} className={styles.wrapper}>
            <div id="MobileNavigation">
                {menuSlots.map((menuSlot, index: number) => {
                    return menuSlot?.menuItem?.length > 0 ? (
                        <Accordion putInViewPort={true} key={index}>
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
            </div>
        </div>
    )
}

export default memo(MenuSlotsMobile)
