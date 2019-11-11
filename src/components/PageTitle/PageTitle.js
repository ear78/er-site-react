import React from 'react'

import styles from './PageTitle.module.css'

/* Main h1 title. pass props to populate value */
const pageTitle = (props) => {
  return (
    <h1 className={styles.Title}>{ props.children }</h1>
  )
}

export default pageTitle
