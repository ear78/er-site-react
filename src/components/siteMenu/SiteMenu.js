import React from 'react'
import styles from './SiteMenu.module.css'

const siteMenu = (props) => {
  let message = 'Site Menu'
  // let image = {
  //  backgroundImage: 'url(' + props.bgImg + ')'
  // }
  return (
      <div className={styles.menuItem} style={{backgroundImage: `url( ${ props.bgImg })`}}></div>
  )
}

export default siteMenu
