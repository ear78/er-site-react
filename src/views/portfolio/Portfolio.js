import React, { Component } from 'react'

import styles from './Portfolio.module.css'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import H4Component from '../../components/h4component/H4Component'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }
  state = {
      message: 'This is Portfolio'
  }

  render() {
      return (
          <div className={styles.Portfolio}>
              <SectionTitle marginBottom={20} textAlign="left" textTransform="uppercase" sectionTitle="Web Development Portfolio"/>
              <p>
                Some of the tools I use to build pages and sites are: HTML, CSS, Javascript, Jquery, Angular, React, Vue JS, Node.js, SQL, Bootstrap, Wordpress/Squarespace CMS systems, and photo/design apps for aesthetics.  Below is my portfolio which contains sites that I've built from the ground up and also some sites that I've designed ui/ux for.  If you would like to get in contact with me about working on a project, please click the link provided or click the Kontakt button below. Thanks so much for checking out what I do. Please enjoy!
              </p>

              <H4Component text="Clients"/>
          </div>
      )
  }
}

export default Portfolio
