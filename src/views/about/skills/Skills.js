import React from 'react'

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

const skills = () => {

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
  let logos = images.map((image) => {
    return <Logos logoImg={image.logo} altText={image.altText}/>
  })

  return (
    <div>
      <h4>Skills</h4>
      <div className={styles.LogoWrapper}>
        {logos}
      </div>

    </div>
  )
}

export default skills
