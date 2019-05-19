import React from 'react'

import styles from './title.module.css'

/* Main h1 title. pass props to populate value */
const title = (props) => {
  return (
    <h1 className={styles.Title}>{ props.title }</h1>
  )
}

export default title
