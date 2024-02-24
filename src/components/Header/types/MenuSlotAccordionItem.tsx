/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageObject } from 'src/types/page'

export type MenuSlotAccordionItemProps = {
    isSelected?: boolean
    setIndex?: (val: number, val1: HTMLInputElement, val2: number) => number
    index?: number
    className?: string
    plusImage?: ImageObject
    minusImage?: ImageObject
    menuSlot?: any
}
