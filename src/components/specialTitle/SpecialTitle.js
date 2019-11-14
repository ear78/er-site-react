import React from 'react'

import styles from './SpecialTitle.module.css'

const specialTitle = (props) => <h4 className={styles.SpecialTitle}>{props.children}</h4>

export default specialTitle
