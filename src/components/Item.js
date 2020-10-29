import React, { Component } from 'react';
import idGenerator from "react-id-generator";

class Item extends Component {
    constructor(props) {
      super(props);
      this.state = {
        taskShows: [],
        task: '',
      }
      this.name = React.createRef();
    }

    componentDidMount () {
      const listTask = localStorage.getItem(this.props.itemName);
      if (listTask) {
        this.setState({taskShows: JSON.parse(listTask)});
      }
    }

    createTask = () => {
      const name = this.name.current.value
      this.name.current.value = ''
      if (name.trim().length === 0) {
        alert('Vui lòng nhập công việc')
      } else {
        let atr =  this.state.taskShows.concat([{name: name, id: idGenerator()}]);
        const maxTask = localStorage.getItem(this.props.itemMax)
        if (atr.length <= maxTask) {
          localStorage.setItem(this.props.itemName, JSON.stringify(atr))
          this.setState({
              taskShows: atr
          });
        } else {
          alert('số lượng công việc ở cột to_do đã đạt giới hạn. Để thêm công việc, vui lòng xóa bớt hoặc thay đổi trong mục cài đặt')
        }
      }
    }

    deleteTask = value => {
      let todoArray = this.state.taskShows.filter(todo => todo.id !== value)
      localStorage.setItem(this.props.itemName, JSON.stringify(todoArray))
      this.setState({taskShows: todoArray});
    }

    updateTask = e => {
      this.setState({task: e.target.value});
    }

    changeTask = e => {
      let todoTask = this.state.taskShows.find((emp) => {
        if (emp.id === e.target.id) {
          return emp
        }
      })
      this.setState({
        task: todoTask.name
      });
    }

    handleChange = value => {
      this.state.taskShows.map(e => {
        if(e.name === value) {
          e.name = this.state.task
        }
      })
      localStorage.setItem(this.props.itemName, JSON.stringify(this.state.taskShows))
      this.setState({
        taskShows: this.state.taskShows
      })
    }

    render() {
      return (
        <div className='kanbanBoard'>
          <div className='status'>
            <b>{this.props.itemName} <span className={this.props.itemColor}>{this.state.taskShows.length}</span></b>
          </div>
          <form className="inner-addon left-addon"  onSubmit={() => this.createTask()}>
            <i className="glyphicon glyphicon-plus"  ></i>
            <input type="text" className="form-control"
              placeholder="Type task and press Enter to add ..."
              ref={this.name}
            />
          </form>
            {
              this.state.taskShows.map((emp, i) => {
                return (
                  <div className="alert alert-success kanbanShow"  role="alert" key={i}>
                    <div className='kanbanShow-task '>
                      {emp.name}
                    </div>
                    <div className='kanbanShow-deleteChange'>
                      <span
                        className="glyphicon glyphicon-trash kanbanDelete"
                        data-toggle="modal" data-target={`#d-${this.props.itemName}-${emp.id}`}
                        type="button"
                      >
                      </span>
                      <div className="modal fade" id={`d-${this.props.itemName}-${emp.id}`} role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-body">
                              <p>Delete Task</p>
                              <p>You sent a request to delete this task. Are you sure?</p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.deleteTask(emp.id)}>Yes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span
                        className="glyphicon glyphicon-pencil kanbanChange"
                        data-toggle="modal" data-target={`#c-${this.props.itemName}-${emp.id}`}
                        onClick = {this.changeTask}
                        id={emp.id}
                        type="button"
                      >
                      </span>
                      <div className="modal fade" id={`c-${this.props.itemName}-${emp.id}`} role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-body">
                              <p>Change Task</p>
                            </div>
                              <div class="input-group input-group-lg" >
                                <span class="input-group-addon">Your task</span>
                                <input type="text" class="form-control"
                                  value =  {this.state.task}
                                  onChange = {this.updateTask}
                                />
                              </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.handleChange(emp.name)}>Save</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            )
          }
        </div>
      )
    }
}

export default Item
