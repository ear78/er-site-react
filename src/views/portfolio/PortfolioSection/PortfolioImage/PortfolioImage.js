import React from 'react'
import styles from './PortfolioImage.module.css'

function portfolioImage(props) {
  return (
    <div className={styles.PortfolioImageContainer}>
      <div
        style={{backgroundImage:`url(${props.bgImage})`}}
        className={styles.PortfolioImage}></div>
    </div>

  )
}

export default portfolioImage
