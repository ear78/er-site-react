import React from 'react'
import styles from './PortfolioImage.module.css'

function portfolioImage(props) {
  return (
    <div
      style={{backgroundImage:`url(${props.bgImage})`}}
      className={styles.PortfolioImage}></div>
  )
}

export default portfolioImage
