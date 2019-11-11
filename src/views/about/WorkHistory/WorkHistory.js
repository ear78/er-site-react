import React from 'react'
import styles from './WorkHistory.module.css'

import { jobs } from './../../../assets/data/workHistoryData.js'
import SectionTitle from './../../../components/SectionTitle/SectionTitle'
import SiteLink from './../../../components/SiteLink/SiteLink'
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'

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
    <SectionWrapper>
      <div className={styles.WorkHistory}>
        <SectionTitle>Work History</SectionTitle>
        {something}
        <p>For full work history, please refer to my <SiteLink
          to={`https://linkedin.com/in/elliot-richardson`}
          bold="true"
          target="true">LinkedIn Profile</SiteLink>
        </p>
      </div>
    </SectionWrapper>
  )
}

export default workHistory
