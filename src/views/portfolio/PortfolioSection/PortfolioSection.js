import React from 'react'
import styles from './PortfolioSection.module.css'

import PortfolioDesc from './PortfolioDesc/PortfolioDesc'
import PortfolioImage from './PortfolioImage/PortfolioImage'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

import beoplay1 from '../../../assets/img/beoplay1.png'
import beoplay2 from '../../../assets/img/beoplay2.png'
import beoplay3 from '../../../assets/img/beoplay3.png'
import beoplay4 from '../../../assets/img/beoplay4.jpg'
import rodesk1 from '../../../assets/img/rodesk1.jpg'
import rodesk2 from '../../../assets/img/rodesk2.jpg'
import rodesk3 from '../../../assets/img/rodesk3.jpg'
import lyft1 from '../../../assets/img/lyft1.jpg'
import lyft2 from '../../../assets/img/lyft2.jpg'
import lyft3 from '../../../assets/img/lyft3.jpg'
import optins1 from '../../../assets/img/optins1.png'
import optins2 from '../../../assets/img/optins2.png'
import emp1 from '../../../assets/img/emp1.png'
import emp2 from '../../../assets/img/emp2.jpg'

function portfolioSection(props) {
  let portfolioData = [
    {
      title: 'Beoplay Website Clone',
      description: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js, SQL',
      images: [beoplay1, beoplay2, beoplay3, beoplay4],
    },
    {
      title: 'RODESK WEBSITE CLONE',
      description: 'HTML, CSS, Javascript, Angular, Jquery, Sketch',
      images: [rodesk1, rodesk2, rodesk3, beoplay4],
    },
    {
      title: 'LYFT WEBSITE CLONE',
      description: 'HTML, CSS, Javascript, Jquery, React, Webpack, Node.js, SQL',
      images: [lyft1, lyft2, lyft3, beoplay4],
    },
    {
      title: 'OPTIMAL INSURANCE, EMPOWERED EMPLOYMENT, SOCDETOX, WE YOGA',
      description: 'Custom HTML, CSS, Squarespace CMS, Wordpress, Affinity Designer, Affinity Photo',
      images: [optins1, optins2, emp1, emp2],
    },
  ]

  let project = portfolioData.map(d => {
    return <section className={styles.ProjectWrapper}>
            <SectionTitle marginBottom={10}>{ d.title }</SectionTitle>
            <PortfolioDesc>{ d.description }</PortfolioDesc>
            <div className={styles.PortfolioImagesRow}>
              { d.images.map(image => {
                return <PortfolioImage bgImage={image}/>
              })}
            </div>
           </section>


  })

  return (
    <div>
      { project }
    </div>
  )
}

export default portfolioSection
