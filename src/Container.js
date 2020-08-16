import React, { Component } from 'react';
import './assert/container.css';
import Item from './components/Item'


class Container extends Component {
    render() {
        return (
            <div className="container">          
                <div className="row">
                    <div className="col-md-4">
                        <Item itemName='Todo'
                              itemColor='label label-warning'  
                        />
                    </div>
                    <div className="col-md-4">
                        <Item itemName='Doing'
                              itemColor='label label-success'     
                        />
                    </div>                                          
                    <div className="col-md-4">
                        <Item itemName='Done'
                              itemColor='label label-danger'     
                        />
                    </div> 
                </div>                    
            </div>   
        );
    }
}

export default Container;
