import React, { Component } from 'react';

class Done extends Component {
    render() {
        return (
            <div>
                <div className='status'>
                    <b>Done <span className="label label-success">0</span></b>
                </div>
                <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-plus"></i>      
                    <input type="text" className="form-control" placeholder="Type task and press Enter to add ..." />
                </div>
            </div>
        );
    }
}

export default Done;