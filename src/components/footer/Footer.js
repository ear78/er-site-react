import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

import Button from '../button/Button'

class Footer extends Component {
  state = {
    path: '/portfolio',
    label: 'Kontakt'
  }
  render() {
    return (
      <div className={styles.Footer}>
        {/*<button>
          <Link to="/">Kontakt</Link>
        </button> */}
        <Button
          path={this.state.path} label={this.state.label} />
      </div>
    )
  }
}

export default Footer
