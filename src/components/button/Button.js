import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.css'
/*
Use props.label property for button text and props.path for route
*/

const button = (props) => {
  return (
    <button className={ styles.Button }>
      <Link to={{pathname: props.path}}>{ props.label }</Link>
    </button>
  )
}

export default button
