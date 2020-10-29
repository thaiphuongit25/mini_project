
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assert/title.scss'
import './assert/common.css'
import Home from './pages/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Router>
        <Route path="/" exact component={ Home } />
      </Router>
      <Footer/>
    </div>
    );
  }
}

export default App
