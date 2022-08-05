import React from 'react'
import styles from './styles/Footer-tw-styles'

const SocialLinksDesktop = (props) => {
  return (
    <React.Fragment>
        {props?.footerData?.footerSocialCollection?.map((socialMenu, index) => {
          return (
            <li key={index}>
              <a
                href={socialMenu?.link}
                target={socialMenu?.target}
                className={styles.footerDesktop.socialIconLink}
              >
                <img className={styles.footerDesktop.socialIcon} src={socialMenu?.image} alt={socialMenu?.title} />
              </a>
            </li>
          )
        })}
    </React.Fragment>
  )
}

export default SocialLinksDesktop
