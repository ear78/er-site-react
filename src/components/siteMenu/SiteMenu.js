import React from 'react'
import styles from './SiteMenu.module.css'

const siteMenu = (props) => {
  return (
    <div className={styles.menuItemContainer}>
      <img className={styles.menuItem} src={props.image} />
    </div>

  )
}

export default siteMenu
