import React, { Component } from 'react'

import Title from './title/Title'

class Header extends Component {
  state = {
    title: 'Elliot Richardson',
    subTitle: 'Front End Developer'
  }
  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <h4>{ this.state.subTitle }</h4>
      </div>
    )
  }
}

export default Header
