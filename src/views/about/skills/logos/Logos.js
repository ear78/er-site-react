import React from 'react'

import styles from './Logos.module.css'

const logos = (props) => {
  return (
    <img className={styles.Logos} src={props.logoImg} alt={props.altText} />
  )
}

export default logos
