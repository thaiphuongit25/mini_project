  
import React, { Component } from 'react';
import { logRoles } from '@testing-library/react';

class Setup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            dataTodo: ''
        }
        this.updateTodo = this.updateTodo.bind(this)
    }
    updateTodo(e) {
        this.setState({dataTodo: e.target.value});
     }
    componentDidMount () {
        let todo = localStorage.getItem('settingTodo');
        if (todo) {
            this.setState({dataTodo: todo});
        }
    }
    setUp = (e) => {
        let todo = this.refs.todo.value
        localStorage.setItem('settingTodo', todo)
        
    }
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
                                        <input type="number" class="form-control"
                                            value = {this.state.dataTodo}
                                            ref ='todo'
                                            onChange = {this.updateTodo} 
                                        />
                                    </div>

                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon">Max to-do tasks</span>
                                        <input type="number" class="form-control"
                                            value = {this.state.data}
                                            ref ='todo'
                                            onChange = {this.updateTodo} 
                                        />
                                    </div>

                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon">Max to-do tasks</span>
                                        <input type="number" class="form-control"
                                            value = {this.state.data}
                                            ref ='todo'
                                            onChange = {this.updateTodo} 
                                        />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.setUp}>Save</button>
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