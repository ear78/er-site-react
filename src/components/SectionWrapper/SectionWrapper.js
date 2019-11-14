import React from 'react'
import PropTypes from 'prop-types'
import styles from './SectionWrapper.module.css'

function sectionWrapper(props) {

  let align = props.alignment

  if(align === 'center') {
    align = styles.Center
  }
  if(align === 'right') {
    align = styles.Right
  }

  return (
    <section className={`${styles.SectionWrapper} ${align}`}>{props.children}</section>
  )
}

sectionWrapper.propTypes = {
  alignment: PropTypes.string
}

export default sectionWrapper
