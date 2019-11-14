import React from 'react'
import PropTypes from 'prop-types'
import styles from './ParaText.module.css'

function paraText(props) {
  let marginTop = props.marginTop ? styles.MarginTop : ''
  let align = props.align ? props.align.toLowerCase() : ''

  if(align === 'center') {
    align = styles.Center
  }
  if(align === 'right') {
    align = styles.Right
  }

  return (
    <p className={`${styles.ParaText} ${align} ${marginTop}`}>{props.children}</p>
  )
}

paraText.propTypes = {
  children: PropTypes.string.isRequired
}

export default paraText
