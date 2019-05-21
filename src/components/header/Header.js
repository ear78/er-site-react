import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

import Title from '../title/Title'
import SubTitle from '../subTitle/SubTitle'

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
          <Title title={this.state.title} />
        </Link>
        <SubTitle subTitle={this.state.subTitle} />
      </div>
    )
  }
}

export default Header
