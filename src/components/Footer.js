import React, { Component } from 'react'

class Footer extends Component {
  state = {
    message: 'This is Footer'
  }
  render() {
    return (
      <div>
        { this.state.message }
      </div>
    )
  }
}

export default Footer
