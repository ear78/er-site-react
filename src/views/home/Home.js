import React, { Component } from 'react';
import SiteMenu from '../../components/siteMenu/SiteMenu'

import styles from './Home.module.css'

import resumeImg from '../../assets/img/resumeImg.jpg'
import aboutImg from '../../assets/img/aboutImg.jpg'
import portfolioImg from '../../assets/img/portfolioImg.jpg'

class Home extends Component {
  state = {
    title: 'Elliot Richardson',
    subTitle: 'Creative UI Developer',
    items: [
      { id: 0, image: aboutImg, itemTitle: 'About'},
      { id: 1, image: portfolioImg, itemTitle: 'Portfolio'},
      { id: 2, image: resumeImg, itemTitle: 'Resume'},
    ]
  }

  render() {
    const items = [aboutImg, portfolioImg, resumeImg]
    const menuItems = this.state.items.map((item, index) =>
      <SiteMenu key={index} image={item.image} title={item.itemTitle}/>
    )
    return (
      <div className={styles.menuWrapper}>
        { menuItems }
      </div>
    )
  }


}

export default Home
