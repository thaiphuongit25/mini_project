import React, { Component } from 'react';

class Setup extends Component {
    render() {
        return (
            <div className='title'>
                <div className='title-name'><i>Kanban Board</i></div>
                <div>
                    <div className="title-setUp glyphicon glyphicon-cog"
                         data-toggle="modal" data-target="#setting"
                    >                       
                    </div>                   
                    <div className="modal fade" id="setting" role="dialog">
                        <div className="modal-dialog">                              
                            <div className="modal-content">
                                <div className="modal-body">
                                    <p>Set up your Kanban</p>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon">Max to-do tasks</span>
                                        <input type="text" className="form-control"                                                
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success">Save</button>
                                </div>
                            </div>                                    
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Setup;