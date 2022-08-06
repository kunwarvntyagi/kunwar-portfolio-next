const styles = {
  footerDesktop: {
    wrapper: 'sm:hidden md:block bg-blue w-full footer-dt',
    container: 'container my-0 mx-auto pb-30 pt-60',
    bottomWrapper: 'footer-menu-wrap flex mb-20',
    menuList: 'footer-menu-list w-1/2 pr-10 mb-13',
    menuLink: 'text-white font-Regular text-16',
    socialMediaLinks: 'social-links',
    socialIconLink: 'social-icon-link inline-block md:mr-10 lg:mr-20 lg:mt-6',
    socialIcon: 'w-30 xl:w-40',
    horizontalLine: 'hr-line',
    copyrightText: 'text-center text-white font-Medium text-16 ml-auto lg:w-auto'
  },
  footerMobile: {
    wrapper: 'md:hidden bg-blue text-white font-Regular',
    container: 'my-0 mx-auto px-30 pt-65 container text-white pb-30',
    bottomWrapper: 'block pt-40 pl-20 mb-40',
    menuList: 'block',
    socialConnect: 'text-left mt-30',
    menuLink: 'text-white mt-20 font-Regular text-16',
    socialMediaLinks: 'social-links',
    socialIconLink: 'social-icon-link mr-20 inline-block md:mr-10 lg:mr-20 lg:mt-6',
    socialIcon: 'w-30 xl:w-40',
    horizontalLine: 'hr-line',
    copyrightText: 'text-center text-white font-Medium text-16 ml-auto lg:w-auto'
  },
}
export default styles
