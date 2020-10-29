  
import React, { Component } from 'react';
import { logRoles } from '@testing-library/react';

class Setup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            setUp: [
                {
                    data: 7,
                    refName: 'todo',
                    taskName: 'Max to-do tasks',
                },
                {
                    data: 3,
                    refName: 'doing',
                    taskName: 'Max doing tasks',
                },
                {
                    data: 10,
                    refName: 'done',
                    taskName: 'Max done tasks',
                }
            ]
        }
        this.update = this.update.bind(this)
    }
    update(event) {
        this.setState({data: event.target.value});
    }
    componentDidMount () {
        let todo = localStorage.getItem(`settingTodo`);
        if (todo) {
            this.setState({data: todo});
        }

        let doing = localStorage.getItem(`settingDoing`);
        if (doing) {
            this.setState({data: doing});
        }

        let done = localStorage.getItem(`settingDone`);
        if (done) {
            this.setState({data: done});
        }
    }
    setUp = () => {
        let todo = this.refs.todo.value, doing = this.refs.doing.value, done = this.refs.done.value
        localStorage.setItem(`settingTodo`, todo)
        localStorage.setItem(`settingDoing`, doing)
        localStorage.setItem(`settingDone`, done)        
        
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

                                    {
                                        this.state.setUp.map((emp, id) => {
                                            return (
                                                <div className="input-group input-group-lg">
                                                    <span className="input-group-addon">{emp.taskName}</span>
                                                    <input type="number" class="form-control"
                                                        value = {emp.data}
                                                        ref = {emp.refName}
                                                        onChange = {this.update} 
                                                    />
                                                </div>
                                            )
                                        })
                                    }

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