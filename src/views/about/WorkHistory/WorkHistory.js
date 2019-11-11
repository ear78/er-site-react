import React from 'react'
import styles from './WorkHistory.module.css'

import { jobs } from './../../../assets/data/workHistoryData.js'
import SectionTitle from './../../../components/SectionTitle/SectionTitle'

function workHistory(props) {

  let something = jobs.map((job, index) => {
    return <div className={styles.History} key={job.index}>
              <h3 className={styles.Company}>
                {job.company} - <span>{job.position}</span>
              </h3>
              <p className={styles.Details}>{job.datesWorked}</p>
              <p className={styles.Details}>{job.location}</p>
              <ul className={styles.List}>
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
      <SectionTitle>Work History</SectionTitle>
      {something}
    </div>

  )
}

export default workHistory
