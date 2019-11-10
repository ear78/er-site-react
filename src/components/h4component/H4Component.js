import React from 'react'
import PropTypes from 'prop-types'

import styles from './H4Component.module.css'

const h4Component = (props) => {
  const styleOptions = {
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    textAlign: props.textAlign,
    textTransform: props.textTransform
  }
  return (
    <h4 style={styleOptions} className={styles.H4Component}>{props.text}</h4>
  )
}

h4Component.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string
}

export default h4Component
