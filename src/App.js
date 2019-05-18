import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import './assets/css/reset.css'

import Home from './views/home/Home'
import About from './views/about/About'
import Portfolio from './views/portfolio/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
      </Router>

      <Footer />
    </div>
  )
}

export default App;
