import React from 'react'
import styles from './PortfolioSection.module.css'

import PortfolioDesc from './PortfolioDesc/PortfolioDesc'
import PortfolioImage from './PortfolioImage/PortfolioImage'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

import beoplay1 from '../../../assets/img/beoplay1.png'
import beoplay2 from '../../../assets/img/beoplay2.png'
import beoplay3 from '../../../assets/img/beoplay3.png'
import beoplay4 from '../../../assets/img/beoplay4.jpg'

function portfolioSection(props) {
  let portfolioData = [
    {
      title: 'Beoplay Website Clone',
      description: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js, SQL',
      images: [beoplay1, beoplay2, beoplay3, beoplay4],
    },
    {
      title: 'Beoplay Website Clone',
      description: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js, SQL',
      images: [beoplay1, beoplay2, beoplay3, beoplay4],
    },
    {
      title: 'Beoplay Website Clone',
      description: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js, SQL',
      images: [beoplay1, beoplay2, beoplay3, beoplay4],
    },
    {
      title: 'Beoplay Website Clone',
      description: 'HTML, CSS, Javascript, Jquery, Angular, Gulp, Sass, Node.js, SQL',
      images: [beoplay1, beoplay2, beoplay3, beoplay4],
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
