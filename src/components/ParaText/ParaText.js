import React from 'react'
import PropTypes from 'prop-types'
import styles from './ParaText.module.css'

function paraText(props) {
  let align = props.align.toLowerCase() // handle upper or lower case 
  if(align === 'center') {
    align = styles.Center
  }
  if(align === 'right') {
    align = styles.Right
  }

  return (
    <p className={`${styles.ParaText} ${align}`}>{props.children}</p>
  )
}

paraText.propTypes = {
  children: PropTypes.string.isRequired
}

export default paraText
