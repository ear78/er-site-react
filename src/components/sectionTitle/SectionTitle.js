import React from 'react'
import PropTypes from 'prop-types'

import styles from './SectionTitle.module.css'

const sectionTitle = (props) => {
  const styleOptions = {
    textTransform: props.textTransform,
    textAlign: props.textAlign,
    marginBottom: props.marginBottom
  }
  return (
    <h3 style={styleOptions} className={styles.SectionTitle}>{props.sectionTitle}</h3>
  )
}

sectionTitle.propTypes = {
  marginBottom: PropTypes.number,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string
}

export default sectionTitle
