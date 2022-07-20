import styles from './styles/Header-tw-styles'

const Header = ({ isMobile }) => {
  return (
    <>
      {isMobile ? <div className={styles.headerContainer}></div> : <div></div>}
    </>
  )
}
export default Header
