import React, { Component } from 'react';

class Doing extends Component {
    render() {
        return (
            <div>
                <div className='status'>
                    <b>Doing <span class="label label-primary">0</span></b>
                </div>
                <div class="inner-addon left-addon">
                    <i class="glyphicon glyphicon-plus"></i>      
                    <input type="text" class="form-control" placeholder="Type task and press Enter to add ..." />
                </div>
            </div>
        );
    }
}

export default Doing;