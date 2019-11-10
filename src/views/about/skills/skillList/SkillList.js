import React from 'react'
import PropTypes from 'prop-types'

import styles from './SkillList.module.css'

const skillList = (props) => {
  return (
    <li className={styles.ListItem}>{props.item}</li>
  )
}

skillList.propTypes = {
  item: PropTypes.string
}

export default skillList
