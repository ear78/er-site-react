import React, { Component} from 'react'
import { Link } from 'react-router-dom'

import styles from './SocialLink.module.css'

const socialLink = (props) => {
    return (
      <Link
        className={`${styles.Links}`}
        key={props.index}
        to={{pathname: props.path}}
        target="_blank">
        <i className={`fa ${props.platform}`} aria-hidden="true"></i>
      </Link>
    )
}

export default socialLink
