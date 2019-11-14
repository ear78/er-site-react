import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.css'


const button = (props) => {
  let btnBg = props.btnBg ? styles.BlackBtn : ''
  let btnLrg = props.btnLrg ? styles.BtnLrg : ''

  return (
    <button className={ `${styles.Button} ${btnBg} ${btnLrg}` }>
      <Link to={{pathname: props.path}}>{ props.children }</Link>
    </button>
  )
}

export default button
