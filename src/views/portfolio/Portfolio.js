import React, { Component } from 'react'

import styles from './Portfolio.module.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import H4Component from '../../components/h4component/H4Component'
import ParaText from '../../components/ParaText/ParaText'
import PortfolioImage from '../../components/PortfolioImage/PortfolioImage'
import ClientList from './clientList/ClientList'

import beoplay from '../../assets/img/beoplay1.png'

class Portfolio extends Component {
  state = {
      clients: [
        {client: 'Optimal Insurance Choice', position: 'Freelance'},
        {client: 'Empowered Employment', position: 'Freelance'},
        {client: 'South Orange County Detox and Treatment', position: 'Freelance'},
        {client: 'Go Fan Base', position: 'Freelance'},
        {client: 'Dev Mountain', position: 'Freelance'},
        {client: 'Antonio Porcheddu', position: 'Freelance'},
        {client: 'International Tower Lighting', position: 'Front End Developer/ Designer'},
        {client: 'Kochava', position: 'Front End UI Developer'},
        {client: 'We Yoga', position: 'Freelance'},
      ],
      portfolios: [beoplay, beoplay, beoplay, beoplay]
  }

  render() {
    let portImage = this.state.portfolios.map(portfolio => {
      return <PortfolioImage bgImage={portfolio}/>
    })
      return (
          <div className={styles.Portfolio}>
              <SectionTitle marginBottom={20} textAlign="left" textTransform="uppercase" sectionTitle="Web Development Portfolio"/>
              <ParaText fullWidth={true}>
                Some of the tools I use to build pages and sites are: HTML, CSS, Javascript, Jquery, Angular, React, Vue JS, Node.js, SQL, Bootstrap, Wordpress/Squarespace CMS systems, and photo/design apps for aesthetics.  Below is my portfolio which contains sites that I've built from the ground up and also some sites that I've designed ui/ux for.  If you would like to get in contact with me about working on a project, please click the link provided or click the Kontakt button below. Thanks so much for checking out what I do. Please enjoy!
              </ParaText>

              <SectionTitle textAlign={'left'}>Clients</SectionTitle>
              <ClientList clients={this.state.clients} />

              <section>
                <SectionTitle>Projects</SectionTitle>
                <div className={styles.PortfolioImagesRow}>
                  {portImage}
                </div>
              </section>
          </div>
      )
  }
}

export default Portfolio
