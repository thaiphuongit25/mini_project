import React, { Component } from 'react';

class Done extends Component {
    render() {
        return (
            <div>
                <div className='status'>
                    <b>Done <span class="label label-success">0</span></b>
                </div>
                <div class="inner-addon left-addon">
                    <i class="glyphicon glyphicon-plus"></i>      
                    <input type="text" class="form-control" placeholder="Type task and press Enter to add ..." />
                </div>
            </div>
        );
    }
}

export default Done;