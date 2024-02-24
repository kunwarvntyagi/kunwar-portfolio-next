/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles/HeaderMobile-tw-styles'
import { MenuSlotAccordionItemProps } from './types/MenuSlotAccordionItem'
import { collapseSection } from '@helpers/accordionAnimation'
import { loader } from '@helpers/image.helper'
import Image from 'next/image'
import classNames from 'classnames'

const MenuSlotAccordionItem = (props: MenuSlotAccordionItemProps) => {
    const { isSelected, setIndex, index, menuSlot, plusImage, minusImage } =
        props

    const bodyRef = useRef<HTMLInputElement>()
    const itemRef = useRef<HTMLButtonElement>()
    const [accordionPicture, setAccordionPicture] = useState(plusImage)

    useEffect(() => {
        if (!isSelected && bodyRef.current) {
            collapseSection(bodyRef.current)
            setAccordionPicture(plusImage)
        } else {
            setAccordionPicture(minusImage)
        }
    }, [isSelected, plusImage, minusImage])

    return (
        <React.Fragment>
            <button
                className={styles.menuSlotButton}
                type="button"
                ref={itemRef}
                onClick={() =>
                    setIndex(index, bodyRef.current, itemRef.current.offsetTop)
                }
            >
                <p>{menuSlot?.title}</p>
                <span className="">
                    <Image
                        src={accordionPicture?.file.url}
                        alt={accordionPicture.description}
                        width={accordionPicture.file.details.image.width}
                        height={accordionPicture.file.details.image.height}
                        loader={loader}
                    />
                </span>
            </button>
            <div
                ref={bodyRef}
                className={classNames(
                    styles.subItemWrapper,
                    isSelected ? 'opacity-1' : 'opacity-0 h-0',
                )}
            >
                {' '}
                {menuSlot?.menuItem?.map((item, index) => {
                    return (
                        <a
                            key={index}
                            className={styles.menuSlotButton}
                            href={item?.fields?.link?.fields?.url}
                        >
                            {item?.fields?.title}
                        </a>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default MenuSlotAccordionItem
