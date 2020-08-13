import React, { Component } from 'react';
import idGenerator from "react-id-generator";
import Setup from './../Setup'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            data: localStorage.getItem('setting'),
            task: ''
        }      
        this.name = React.createRef();
        this.updateState = this.updateState.bind(this)
    }
    componentDidMount () {
        let atr = localStorage.getItem("todo");
        if (atr) {
            this.setState({todo: JSON.parse(atr)});
        }
    }
    creatTask = (e) => {
        let text = this.name.current.value
        this.name.current.value = ''
        if(text.length == 0) {
            alert('Vui lòng nhập công việc')
        } else {
            let atr =  this.state.todo.concat([{name: text, id: idGenerator()}]);
            localStorage.setItem("todo", JSON.stringify(atr))
            if(atr.length <= this.state.data) {
                this.setState({
                    todo: atr
                });
            } else {
                alert('số lượng công việc ở cột to_do đã đạt giới hạn. Để thêm công việc, vui lòng xóa bớt hoặc thay đổi trong mục cài đặt')
            }
        }         
    }
    workDelete = value => {
        let todoArray = this.state.todo.filter(todo => todo.id !== value)
        localStorage.setItem("todo", JSON.stringify(todoArray))
        this.setState({todo: todoArray});
        window.location.reload();
    }
    updateState = e => {
        this.setState({task: e.target.value});
    }
    changeTask = e => {
        let todoTask = this.state.todo.find((emp) => {
            if (emp.id === e.target.id) {
                return emp
            }
        })
        this.setState({
            task: todoTask.name
         });       
    }
    todoChange = (value) => {
        this.state.todo.map(e => {
            if(e.name === value) {
                e.name = this.state.task
            }
        })
    }
    render() {
        return (
            <div>
                <div className='status'>
                    <b>Todo <span className="label label-danger">{ this.state.todo.length }</span></b>
                </div>
                <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-plus"
                        onClick={() => this.creatTask()}
                    >
                    </i>      
                    <input type="text" 
                           className="form-control" 
                           placeholder="Type task and press Enter to add ..."
                           ref={this.name}
                    />
                </div>
                <div>
                    {this.state.todo.map((emp, i) => {
                        return (
                            <div className="alert alert-success "  role="alert" key={i}>
                                {emp.name}
                                <span 
                                    className="glyphicon glyphicon-trash"
                                    data-toggle="modal" data-target={`#${emp.id}`}
                                >
                                </span>
                                <div className="modal fade" id={`${emp.id}`} role="dialog">
                                    <div className="modal-dialog">                              
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <p>Delete Task</p>
                                                <p>You sent a request to delete this task. Are you sure?</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.workDelete(emp.id)}>Yes</button>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <span 
                                    className="glyphicon glyphicon-pencil"
                                    data-toggle="modal" data-target={`#change-${emp.id}`}
                                    onClick = {this.changeTask}
                                    id={emp.id}
                                >
                                </span>
                                <div className="modal fade" id={`change-${emp.id}`} role="dialog">
                                    <div className="modal-dialog">                              
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <p>Change Task</p>                                                
                                            </div>
                                                <div class="input-group input-group-lg" >
                                                    <span class="input-group-addon">Your task</span>
                                                    <input type="text" class="form-control"
                                                       value =  {this.state.task}
                                                       onChange = {this.updateState} 
                                                    />
                                                </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.todoChange(emp.name)}>Yes</button>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>                            
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Todo;