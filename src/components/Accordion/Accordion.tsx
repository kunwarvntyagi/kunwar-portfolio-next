import React, { useState } from 'react'
import {
    expandSection,
    collapseSection,
    scrollToTop,
} from '../../helpers/accordionAnimation'
import { AccordionProps } from './Accordion.types'

const Accordion = (props: AccordionProps) => {
    const { children, putInViewPort } = props
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [contentHeight, setContentHeight] = useState(0)

    const scrollHeader = (headerPosition, contentEl, operation = 'sub') => {
        let { parentElement } = props
        if (!parentElement && typeof window !== 'undefined') {
            parentElement = window
        } else {
            parentElement = document.getElementById(parentElement)
        }

        if (putInViewPort) {
            scrollToTop(
                parentElement,
                operation === 'add'
                    ? headerPosition
                    : headerPosition - contentHeight,
            )
            if (contentEl) {
                setContentHeight(contentEl.scrollHeight)
            }
        }
    }

    const setIndex = (i, contentEl, headerPosition, scrollStatus = true) => {
        if (selectedIndex === i || i === -1) {
            setSelectedIndex(-1)
            putInViewPort && setContentHeight(0)
            collapseSection(contentEl)
        } else {
            setSelectedIndex(i)
            const operation = selectedIndex < i ? 'sub' : 'add'
            if (headerPosition && scrollStatus === true) {
                scrollHeader(headerPosition, contentEl, operation)
            }
            expandSection(contentEl)
        }
    }

    return <React.Fragment>{children(selectedIndex, setIndex)}</React.Fragment>
}

export default Accordion
