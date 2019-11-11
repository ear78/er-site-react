import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from './App.module.css'

import './App.css'
import './assets/css/reset.css'

import Home from './views/home/Home'
import About from './views/about/About'
import Portfolio from './views/portfolio/Portfolio'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />

      <Footer />
      </Router>
    </div>
  )
}

export default App;
