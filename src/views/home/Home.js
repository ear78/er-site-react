import React, { Component } from 'react';
import SiteMenu from '../../components/siteMenu/SiteMenu'

import styles from './Home.module.css'

import clouds from '../../assets/img/clouds1.jpg'
import aboutImg from '../../assets/img/aboutImg.jpg'
import portfolioImg from '../../assets/img/portfolioImg.jpg'

class Home extends Component {
  state = {
    title: 'Elliot Richardson',
    subTitle: 'Creative UI Developer'
  }

  render() {
    const items = [clouds, portfolioImg, aboutImg]
    const menuItems = items.map((item, index) =>
      <SiteMenu key={index} image={item}/>
    )
    return (
      <div className={styles.menuWrapper}>
        { menuItems }
      </div>
    )
  }


}

export default Home
