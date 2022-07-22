import HeaderDesktop from './HeaderDesktop'
import styles from './styles/Header-tw-styles'

const Header = ({ isMobile, headerData }) => {
  return (
    <>
      {isMobile ? (
        <div className={styles.headerContainer}></div>
      ) : (
        <HeaderDesktop data={headerData} />
      )}
    </>
  )
}
export default Header
