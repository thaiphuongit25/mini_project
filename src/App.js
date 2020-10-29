
import React, { Component } from 'react';
import './assert/title.scss';
import Container from './Container'
import Setup from './Setup'

class App extends Component {
  render() {
    return (
      <div>
        <Setup />        
        <Container />             
      </div>
    );
  }
}

export default App;