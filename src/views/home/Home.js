import React, { Component } from 'react';
import BackgroundImg from '../../components/BackgroundImg'
import SiteMenu from '../../components/siteMenu/SiteMenu'
import styles from './Home.module.css'

// import Person from '../../components/Person'
import clouds from '../../assets/img/clouds1.jpg'
import aboutImg from '../../assets/img/aboutImg.jpg'
import portfolioImg from '../../assets/img/portfolioImg.jpg'

class Home extends Component {
  state = {
    title: 'Elliot Richardson',
    subTitle: 'Creative UI Developer'
  }

  // togglePersonsHandler = () => {
  //   const isPersons = this.state.showPersons
  //   this.setState({
  //     showPersons: !isPersons
  //   })
  // }

  render() {
    // let persons = null
    //
    // if( this.state.showPersons ){
    //   persons = (
    //     <div>
    //       { this.state.persons.map(person => {
    //         return <Person
    //                 key={person.name}
    //                 name={person.name}
    //                 age={person.age} />
    //       })}
    //     </div>
    //   )
    // }
    const items = [clouds, portfolioImg, aboutImg]
    const menuItems = items.map((item, index) =>
      <SiteMenu key={index} bgImg={item}/>
    )
    return (
      <div className={styles.menuWrapper}>
        {/* <button onClick={this.togglePersonsHandler}>Toggle Names</button> */}
        {/* <BackgroundImg image={clouds} title={this.state.title} subTitle={this.state.subTitle}/> */}
        { menuItems }
      </div>
    )
  }


}

export default Home
