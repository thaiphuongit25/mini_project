import React, { Component } from 'react';
import idGenerator from "react-id-generator";

class Doing extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            doing: [],
            data: '',
            task: ''
        }
        this.name = React.createRef();
    }
    componentDidMount() {
        let atr = localStorage.getItem('doing')
        if (atr) {
            this.setState({ doing: JSON.parse(atr) });
        }
    }
    creatTask = () => {
        let text = this.name.current.value
        this.name.current.value = ''
        if (text.length == 0) {
            alert('Vui lòng nhập công việc')
        } else {
            let atr =  this.state.doing.concat([{name: text, id: idGenerator()}])
            this.state.data = localStorage.getItem('settingDoing')
            if (atr.length <= this.state.data) {
                localStorage.setItem('doing', JSON.stringify(atr))
                this.setState({ 
                    doing: atr
                });
            } else {
                alert('số lượng công việc ở cột to_do đã đạt giới hạn. Để thêm công việc, vui lòng xóa bớt hoặc thay đổi trong mục cài đặt')
            }
        }
    }
    workDelete = (value) => {
        let doingArray = this.state.doing.filter(doing => doing.id != value)
        localStorage.setItem('doing', JSON.stringify(doingArray))
        this.setState({doing: doingArray})
    }
    updateState = e => {
        this.setState({task: e.target.value});
    }
    changeTask = e => {
        let doingTask = this.state.doing.find((emp) => {
            if (emp.id === e.target.id) {
                return emp
            }
        })
        this.setState({task: doingTask.name});  
    }
    todoChange = (value) => {
        this.state.doing.map(e => {
            if(e.name === value) {
                e.name = this.state.task
            }
        })
        this.setState({ 
            doing: this.state.doing
        });
    }
    render() {
        return (
            <div className='kanbanBoard'>
                <div className='status'>
                    <b>Doing <span className="label label-primary">{this.state.doing.length}</span></b>
                </div>
                <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-plus"
                        onClick={() => this.creatTask()}
                    >
                    </i>      
                    <input  type="text" className="form-control" 
                            placeholder="Type task and press Enter to add ..." 
                            ref={this.name}
                    />
                </div>
                <div>
                    {
                        this.state.doing.map((emp, i) => {
                            return (
                                <div className="alert alert-success kanbanShow"  role="alert" key={i}>
                                    <div className='kanbanShow-task'>
                                        {emp.name}
                                    </div>

                                    <div className='kanbanShow-deleteChange'>
                                        <span class = 'glyphicon glyphicon-trash kanbanDelete' 
                                              data-toggle="modal" data-target={`#${emp.id}`}
                                              kanbanDelete
                                        >
                                        </span>
                                        <div class="modal fade" id={`${emp.id}`} role="dialog">
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

                                        <span class = 'glyphicon glyphicon-pencil kanbanChange' data-toggle="modal" 
                                            data-target={`#change-${emp.id}`}
                                            onClick = {this.changeTask}
                                            id={emp.id}
                                            kanbanChange
                                        >
                                        </span>
                                        <div class="modal fade" id={`change-${emp.id}`} role="dialog">
                                            <div className="modal-dialog">                              
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <p>Change Task</p>
                                                        <div class="input-group input-group-lg" >
                                                            <span class="input-group-addon">Your task</span>
                                                            <input type="text" class="form-control"
                                                                value={this.state.task}
                                                                onChange={this.updateState}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.todoChange(emp.name)}>Save</button>
                                                    </div>
                                                </div>                                    
                                            </div>
                                        </div>

                                    </div>                                                                       
                                </div>
                            )
                        })
                    }                    
                </div>
            </div>
        );
    }
}

export default Doing;
