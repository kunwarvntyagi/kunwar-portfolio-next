import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'

const Footer = (props) => {
  return (
    <>
      <FooterDesktop {...props} />
      <FooterMobile {...props} />
    </>
  )
}

export default Footer
