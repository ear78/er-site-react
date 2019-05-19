import React from 'react'

import styles from './SubTitle.module.css'

/* Main h4 subtitle. pass props to populate value */
const subTitle = (props) => {
  return (
    <h4 className={styles.SubTitle}>{ props.subTitle }</h4>
  )
}

export default subTitle
