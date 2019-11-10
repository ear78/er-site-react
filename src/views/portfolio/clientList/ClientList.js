import React from 'react'

import styles from './ClientList.module.css'

const clientList = (props) => {
  let clientItem = props.clients.map((item,index) => {
    return <li key={index} className={styles.Client}>{item.client} - <span>{item.position}</span></li>
  })

  return (
    <ul className={styles.ClientList}>
      {clientItem}
    </ul>
  )
}

export default clientList
