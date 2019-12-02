import React from 'react'
import PropTypes from 'prop-types'
import styles from './ParaText.module.css'

function paraText(props) {
  let marginTop = props.marginTop ? styles.MarginTop : ''
  let marginBottom = props.marginBottom ? props.marginBottom : ''
  let align = props.align ? props.align.toLowerCase() : ''
  let fullWidth = props.fullWidth ? styles.FullWidth : ''

  if(align === 'center') {
    align = styles.Center
  }
  if(align === 'right') {
    align = styles.Right
  }

  return (
    <p style={{ marginBottom: `${marginBottom}px`}} className={`${styles.ParaText} ${align} ${marginTop} ${fullWidth}`}>{props.children}</p>
  )
}

paraText.propTypes = {
  children: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  align: PropTypes.string,
  fullWidth: PropTypes.bool
}

export default paraText
