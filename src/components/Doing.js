import React, { Component } from 'react';

class Doing extends Component {
    render() {
        return (
            <div>
                <div className='status'>
                    <b>Doing <span className="label label-primary">0</span></b>
                </div>
                <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-plus"></i>      
                    <input type="text" className="form-control" placeholder="Type task and press Enter to add ..." />
                </div>
            </div>
        );
    }
}

export default Doing;