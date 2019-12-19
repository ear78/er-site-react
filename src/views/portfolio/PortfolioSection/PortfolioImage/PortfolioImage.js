import React from 'react'
import styles from './PortfolioImage.module.css'

function portfolioImage(props) {
  return (
    <div onClick={props.click} className={styles.PortfolioImageContainer}>
      {/*<div
        style={{backgroundImage:`url(${props.bgImage})`}}
        className={styles.PortfolioImage}></div>*/}
        <img src={props.bgImage} />
    </div>

  )
}

export default portfolioImage
