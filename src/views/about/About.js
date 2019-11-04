import React, { Component } from 'react'
import styles from './About.module.css'

import Profile from './profile/Profile'
import Skills from './skills/Skills'
import WorkHistory from './WorkHistory/WorkHistory'

class About extends Component {
    state = {
        message: 'This is About'
    }
    render() {
        return (
            <div className={styles.About}>
              <Profile />
              <Skills />
              <WorkHistory />
            </div>
        )
    }
}

export default About
