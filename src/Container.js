import React, { Component } from 'react';
import './assert/container.css';
import Item from './components/Item'


function Container() {
    return (
        <div className="container">          
            <div className="row">
                <div className="col-md-4">
                    <Item itemName='Todo'
                        itemColor='label label-warning'
                        itemMax='settingTodo'  
                    />
                </div>
                <div className="col-md-4">
                    <Item itemName='Doing'
                        itemColor='label label-success'
                        itemMax='settingDoing'       
                    />
                </div>                                          
                <div className="col-md-4">
                    <Item itemName='Done'
                        itemColor='label label-danger'
                        itemMax='settingDone'      
                    />
                </div> 
            </div>                    
        </div>   
    );
}

export default Container;
