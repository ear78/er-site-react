import React from 'react'

import SkillList from './skillList/SkillList'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Logos from './logos/Logos'
import styles from './Skills.module.css'

import cssImage from '../../../assets/img/css3-blk.png'
import htmlImage from '../../../assets/img/html5-blk.png'
import angularImage from '../../../assets/img/angular-blk.png'
import jsImage from '../../../assets/img/javascript-blk.png'
import nodeImage from '../../../assets/img/nodejs-Logo-blk.png'
import reactImage from '../../../assets/img/react-logo-blk.png'
import gulpImage from '../../../assets/img/gulp-blk.png'
import sassImage from '../../../assets/img/sass-blu.png'
import vueImage from '../../../assets/img/vuejs-logo.png'

const skills = (props) => {

  const images = [
    {logo: cssImage, altText: 'css logo'},
    {logo: htmlImage, altText: 'html logo'},
    {logo: angularImage, altText: 'angular logo'},
    {logo: jsImage, altText: 'js logo'},
    {logo: nodeImage, altText: 'node logo'},
    {logo: reactImage, altText: 'angular logo'},
    {logo: gulpImage, altText: 'gulp logo'},
    {logo: sassImage, altText: 'sass logo'},
    {logo: vueImage, altText: 'vuejs logo'},
  ]

  let logos = images.map((image, index) => {
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
  )
}

export default skills
