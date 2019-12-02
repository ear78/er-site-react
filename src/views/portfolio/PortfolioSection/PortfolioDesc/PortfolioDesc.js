import React from 'react'

import styles from './PortfolioDesc.module.css'

function portfolioDesc(props) {
  return (
    <p id={styles.PortfolioDesc} className={styles.PortfolioDesc}>{props.children}</p>
  )
}

export default portfolioDesc
