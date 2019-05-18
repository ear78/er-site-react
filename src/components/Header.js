import React, { Component } from 'react'

class Header extends Component {
  state = {
    title: 'Elliot Richardson',
    subTitle: 'Front End Developer'
  }
  render() {
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <h4>{ this.state.subTitle }</h4>
      </div>
    )
  }
}

export default Header
