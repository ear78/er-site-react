import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SiteMenu.module.css'

const siteMenu = (props) => {
  return (
    <div className={styles.MenuItemContainer}>
      <img className={styles.MenuItem} src={props.image} alt=''/>
      <h4 className={styles.MenuItemTitle}>{ props.title }</h4>
    </div>

  )
}

export default siteMenu
