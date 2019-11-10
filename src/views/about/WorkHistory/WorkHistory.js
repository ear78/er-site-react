import React from 'react'
import styles from './WorkHistory.module.css'

import { jobs } from './../../../assets/data/workHistoryData.js'

function workHistory(props) {

  let something = jobs.map((job, index) => {
    return <div className={styles.History} key={job.index}>
              <h3>{job.company} - <span>{job.position}</span></h3>
              <p className={styles.Details}>{job.datesWorked}</p>
              <p className={styles.Details}>{job.location}</p>
              <ul>
                {
                  job.description.map((item) => {
                    return <li>{item}</li>
                  })
                }
              </ul>
           </div>
  })

  return (
    <div className={styles.WorkHistory}>
      {something}
    </div>

  )
}

export default workHistory
