import React, { Component } from 'react';
import idGenerator from "react-id-generator";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [], 
        }       
    }
    componentDidMount () {
        let atr = localStorage.getItem("todo");
        if (atr) {
            this.setState({todo: JSON.parse(atr)});
        }
    }
    creatTask = () => {
        let text = this.refs.name.value
        this.refs.name.value = ''
        if(text == 0) {
            alert('Vui lòng nhập công việc')
        } else {
            let atr =  this.state.todo.concat([{name: text}]);
            localStorage.setItem("todo", JSON.stringify(atr))
            this.setState({
                todo: atr
            });
        }
    }
    workDelete = e => {
        let todoArray = this.state.todo.filter(work => work !== e.target.value)
        this.setState({todo: todoArray});
    }
    render() {
        return (
            <div>
                <div className='status'>
                    <b>Todo <span className="label label-primary">0</span></b>
                </div>
                <div className="inner-addon left-addon">
                    <i class="glyphicon glyphicon-plus"
                        onClick={this.creatTask}
                    >
                    </i>      
                    <input type="text" 
                           className="form-control" 
                           placeholder="Type task and press Enter to add ..."
                           ref='name'
                    />
                </div>
                <div>
                    {this.state.todo.map((emp, i) => {
                        return (
                            <div className="alert alert-success "  role="alert" key={i}>
                                {emp.name}
                                <span 
                                    class="glyphicon glyphicon-trash"
                                    data-toggle="modal" data-target="#myModal"
                                >
                                </span>
                                <div class="modal fade" id="myModal" role="dialog">
                                    <div class="modal-dialog">                              
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <p>Delete Task</p>
                                            <p>You sent a request to delete this task. Are you sure?</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-success" onClick={this.workDelete}>Yes</button>
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
