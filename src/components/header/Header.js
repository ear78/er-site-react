import React, { Component } from 'react'

import styles from './Header.module.css'

import Title from '../title/Title'
import SubTitle from '../subTitle/SubTitle'

class Header extends Component {
  state = {
    title: 'Elliot Richardson',
    subTitle: 'Front End Developer'
  }
  render() {
    return (
      <div className={styles.HeaderWrap}>
        <Title title={this.state.title} />
        <SubTitle subTitle={this.state.subTitle} />
      </div>
    )
  }
}

export default Header
