export const collapseSection = (element = null) => {
  if (element) {
    element.style.height = 0
  }
}

export const expandSection = (element = null) => {
  if (element) {
    const sectionHeight = element.scrollHeight
    element.style.height = sectionHeight + 'px'
  }
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
