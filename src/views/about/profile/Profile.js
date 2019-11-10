import React from 'react'

import styles from './Profile.module.css'

import SpecialTitle from '../../../components/specialTitle/SpecialTitle'
import ParaText from '../../../components/ParaText/ParaText'
import profileImg from '../../../assets/img/profileImg.png'

const profile = () => {
  return (
    <section className={styles.Profile}>
      <div className={styles.ImageContainer}>
        <img className={styles.ProfileImg} src={profileImg} alt="profile image" />
      </div>

      <SpecialTitle text="Hi I'm Elliot Richardson"/>
      <ParaText align='center'>
        A creative Front End Web Developer focused on elegant design and user experience. I am currently a Front End UI Developer utilizing modern JS frameworks and architecting a new Wordpress system for our marketing team at a leading mobile attribution company called Kochava.  I also work on freelance projects ranging from personal to small business sites,  so if interested, please feel free to reach out and say hello. Let me help you look great on the web!
      </ParaText>
    </section>
  )
}

export default profile
