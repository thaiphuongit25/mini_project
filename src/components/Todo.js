import React, { Component } from 'react';
import idGenerator from "react-id-generator";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            number: 3
        }       
        this.name = React.createRef();
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
            if(atr.length <= this.state.number) {
                this.setState({
                    todo: atr
                });
            } else {
                alert('số lượng công việc ở cột to_do đã đạt giới hạn. Để thêm công việc, vui lòng xóa bớt hoặc thay đổi trong mục cài đặt')
            }
        }
         
    }
    workDelete = (e, value) => {
        let todoArray = this.state.todo.filter(todo => todo.id !== value)
        localStorage.setItem("todo", JSON.stringify(todoArray))
        this.setState({todo: todoArray});
    }
    render() {
        return (
            <div>
                <div className='status'>
                    <b>Todo <span className="label label-primary">{ this.state.todo.length }</span></b>
                </div>
                <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-plus"
                        onClick={this.creatTask}
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
                                    data-toggle="modal" data-target="#myModal"
                                >
                                </span>
                                <div className="modal fade" id="myModal" role="dialog">
                                    <div className="modal-dialog">                              
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <p>Delete Task</p>
                                                <p>You sent a request to delete this task. Are you sure?</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-success" onClick={() => this.workDelete(this, emp.id)}>Yes</button>
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