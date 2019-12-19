import React from 'react'
import styles from './PortfolioSection.module.css'
import { portfolioData } from '../../../assets/data/images'

import PortfolioDesc from './PortfolioDesc/PortfolioDesc'
import PortfolioImage from './PortfolioImage/PortfolioImage'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

function portfolioSection(props) {
  let project = portfolioData.map(d => {
    return <section className={styles.ProjectWrapper}>
            <SectionTitle marginBottom={10}>{ d.title }</SectionTitle>
            <PortfolioDesc>{ d.description }</PortfolioDesc>
            <div className={styles.PortfolioImagesRow}>
              { d.images.map(image => {
                return <PortfolioImage click={props.click} bgImage={image}/>
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
