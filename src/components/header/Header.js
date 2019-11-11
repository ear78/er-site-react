import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

import PageTitle from '../PageTitle/PageTitle'
import SubTitle from '../SubTitle/SubTitle'

class Header extends Component {
  state = {
    title: 'Elliot Richardson',
    subTitle: 'Front End Developer',
    path: '/'
  }
  render() {
    return (
      <div className={styles.HeaderWrap}>
        <Link to={{pathname: this.state.path}}>
          <PageTitle>{this.state.title}</PageTitle>
        </Link>
        <SubTitle>{this.state.subTitle}</SubTitle>
      </div>
    )
  }
}

export default Header
