import React from 'react'

import styles from './PortfolioModal.module.css'

function portfolioModal(props) {
  if(!props.show) {
      return null;
    }
  return (
    <div className={styles.PortfolioModal} onClick={props.close}>
      <div className={styles.InnerCard}>
        <p>Some junk goes in here</p>
      </div>

    </div>
  )
}

export default portfolioModal
