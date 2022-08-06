const styles = {
  navBar: 'navbar w-full bg-blue text-white font-Regular',
  navbarWrapper: 'flex flex-wrap w-full absolute top-0 left-0 h-10vh z-20',
  navbarWrapperOpen:
    'header-wrapper flex flex-wrap w-full fixed top-0 left-0 z-20',
  headerContainer:
    'header-container flex justify-between relative w-full max-w-lg px-20 mx-auto',
  brandLogoWrapper:
    'logo-wrapper flex flex-wrap items-center justify-center overflow-hidden w-50 h-50',
  iconWrapper: 'sp-menu-p1 flex flex-wrap items-center justify-center',
  hamburgerWrapper:
    'hamburger-wrapper flex flex-wrap items-center justify-center lg:hidden',
  hamburgerOpen: 'mr-auto ml-10 py-15',
  hamburger: 'mr-auto ml-10 py-15',
  hamburgerIcon: 'w-20 h-20 text-white',
  mainWrapper:
    'h-screen z-10 fixed top-0 bottom-0 left-0 right-0 w-full flex flex-wrap',
  navbarWrapperMobileOpen:
    'w-full nav-mobile slide-in h-screen overflow-y-scroll bg-blue text-white flex flex-wrap justify-between content-between',
  navbarWrapperMobile: 'w-full nav-mobile slide-out bg-blue text-white',
  menuItem: 'mx-15',
  menuComponentDivClass:
    'dt-open-menu-wrap shadow-lg rounded block items-center flex lg:justify-between lg:absolute z-50 m-auto',
  childComponentDivClass: 'menu-links w-full rounded bg-white z-50',
  menuListItem: 'text-black font-Regular',
  meunList: 'p-15',
  subItemWrapper: 'ml-10vw',
  wrapper: 'bg-blue menu-container mt-10vh overflow-y-auto w-full',
  accordionWrapper: 'mt-40 bg-blue menu-main-accordion overflow-auto',
  menuSlotButton: 'flex text-left w-full font-Regular text-20 text-white px-30 py-25',
}
export default styles
