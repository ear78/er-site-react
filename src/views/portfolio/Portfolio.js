import React, { Component } from 'react'

import styles from './Portfolio.module.css'
import H4Component from '../../components/h4component/H4Component'
import ParaText from '../../components/ParaText/ParaText'
import ClientList from './clientList/ClientList'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import PortfolioSection from './PortfolioSection/PortfolioSection'
import PortfolioModal from './PortfolioModal/PortfolioModal'

import { clients } from '../../assets/data/clients'

class Portfolio extends Component {
  state = {
    isModalOpen: false
  }

  handleModal() {
    console.log('fired!')
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
      return (
          <div className={styles.Portfolio}>
              <PortfolioModal
                close={this.handleModal.bind(this)}
                show={this.state.isModalOpen}/>
              <SectionTitle
                marginBottom={20}
                textAlign="left"
                textTransform="uppercase"
                sectionTitle="Web Development Portfolio"/>
              <ParaText marginBottom={40} fullWidth={true}>
                Some of the tools I use to build pages and sites are: HTML, CSS, Javascript, Jquery, Angular, React, Vue JS, Node.js, SQL, Bootstrap, Wordpress/Squarespace CMS systems, and photo/design apps for aesthetics.  Below is my portfolio which contains sites that I've built from the ground up and also some sites that I've designed ui/ux for.  If you would like to get in contact with me about working on a project, please click the link provided or click the Kontakt button below. Thanks so much for checking out what I do. Please enjoy!
              </ParaText>

              <SectionWrapper>
                <SectionTitle textAlign={'left'}>Clients</SectionTitle>
                <ClientList clients={clients} />
              </SectionWrapper>

              <PortfolioSection click={this.handleModal.bind(this)}/>

          </div>
      )
  }
}

export default Portfolio
