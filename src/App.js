import React, { Component } from 'react';
import './assert/title.scss';
import Container from './Container'

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>
          <div className='title-name'><i>Kanban Board</i></div>
          <div className="title-setUp glyphicon glyphicon-cog"></div>
        </div>        
        <Container />             
      </div>
    );
  }
}

export default App;
