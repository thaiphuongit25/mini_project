import React, { Component } from 'react';
import './assert/container.css';
import Todo from './components/Todo'
import Doing from './components/Doing'
import Done from './components/Done'

class Container extends Component {
    render() {
        return (
            <div className="container">          
                <div className="row">
                    <div class="col-md-4">
                        <Todo />
                    </div>
                    <div class="col-md-4">
                        <Doing />
                    </div>                                          
                    <div class="col-md-4">
                        <Done />
                    </div> 
                </div>                    
            </div>   
        );
    }
}

export default Container;
