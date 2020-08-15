  
import React, { Component } from 'react';
import { logRoles } from '@testing-library/react';

class Setup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            dataTodo: '',
            datDoing: ''
        }
        this.updateDoing = this.updateDoing.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }
    updateDoing(e) {
        this.setState({dataTodo: e.target.value});
     }
    updateTodo(e) {
        this.setState({dataDoing: e.target.value});
     }
    componentDidMount () {
        let todo = localStorage.getItem('settingTodo');
        if (todo) {
            this.setState({dataTodo: todo});
        }

        let doing = localStorage.getItem('settingDoing');
        if (doing) {
            this.setState({dataDoing: doing});
        }
    }
    setUp = (e) => {
        let todo = this.refs.todo.value
        let doing = this.refs.doing.value
        localStorage.setItem('settingTodo', todo)
        localStorage.setItem('settingDoing', doing)
        
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
                                            value = {this.state.data}
                                            ref ='todo'
                                            onChange = {this.updateTodo} 
                                        />
                                    </div>

                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon">Max doing tasks</span>
                                        <input type="number" class="form-control"
                                            value = {this.state.data}
                                            ref ='doing'
                                            onChange = {this.updateDoing} 
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