import React from 'react'

import SkillList from './skillList/SkillList'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'
import Logos from './logos/Logos'
import styles from './Skills.module.css'

import { skillLogos } from '../../../assets/data/images'



const skills = (props) => {

  let logos = skillLogos.map((image, index) => {
    return <Logos key={index} logoImg={image.logo} altText={image.altText}/>
  })

  const col1 = ['HTML5', 'CSS', 'React', 'Javascript']
  const col2 = ['Node', 'Angular', 'Gulp', 'Wordpress']
  const col3 = ['Sass','Vue JS', 'SQL', 'Affinity Suite']
  const col4 = ['Bootstrap', 'Git']

  let list1 = col1.map((skill, index) => {
    return <SkillList key={index} item={skill} />
  })
  let list2 = col2.map((skill, index) => {
    return <SkillList key={index} item={skill} />
  })
  let list3 = col3.map((skill, index) => {
    return <SkillList key={index} item={skill} />
  })
  let list4 = col4.map((skill, index) => {
    return <SkillList key={index} item={skill} />
  })

  return (
    <SectionWrapper>
      <div className={styles.Skills}>
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.LogoWrapper}>
          {logos}
        </div>

        <div className={styles.ListWrapper}>
          <div className={styles.ListColumn}>
            {list1}
          </div>
          <div className={styles.ListColumn}>
            {list2}
          </div>
          <div className={styles.ListColumn}>
            {list3}
          </div>
          <div className={styles.ListColumn}>
            {list4}
          </div>
        </div>
      </div>
    </SectionWrapper>

  )
}

export default skills
