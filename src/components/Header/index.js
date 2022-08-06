import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = ({ isMobile, headerData }) => {
  return (
    <>
      {isMobile ? (
        <HeaderMobile data={headerData} />
      ) : (
        <HeaderDesktop data={headerData} />
      )}
    </>
  )
}
export default Header
