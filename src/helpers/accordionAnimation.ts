export const collapseSection = (element = null) => {
    // Check if client height is 0, then we don't animate
    if (element && element.clientHeight > 0) {
        // Get Section Height
        const sectionHeight = element.scrollHeight
        // Remove anim so that when we set px height it doesn't animate
        element.classList.remove('accordion-cardcontent-anim')
        // After removal, inside one anim frame we will set the px height
        requestAnimationFrame(() => {
            element.style.height = sectionHeight + 'px'
            // Wewill add back the transition for the collapse animation
            element.classList.add('accordion-cardcontent-anim')
            // After this animation ends, we wil trigger the following animation
            requestAnimationFrame(() => {
                // set the height as 0, this animation from px to 0 happens
                element.style.height = 0
                element.style.opacity = '0%'
            })
        })
    }
}

export const expandSection = (element = null) => {
    if (element) {
        const sectionHeight = element.scrollHeight
        element.style.height = sectionHeight + 'px'
        element.style.opacity = '100%'
        element.addEventListener('transitioned', handleTransitionEnd)
    }
}

const handleTransitionEnd = (event) => {
    const element = event.target
    element.removeEventListener('transitioned', handleTransitionEnd)
    element.style.height = 'auto'
}

export const scrollToTop = (element = null, position) => {
    if (element && typeof window !== 'undefined') {
        const headerMenu = document.getElementById('headerMenu')
        const headerHeight = (headerMenu && headerMenu.clientHeight) || 70
        const scrolloffset =
            element.offsetTop > 0 ? element.offsetTop : headerHeight
        element.scrollTo({ top: position - scrolloffset, behavior: 'smooth' })
    }
}
