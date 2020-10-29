import React, { Component } from 'react'

class Modal extends Component {
  render() {
    return (
      <div>
        <span
          className="glyphicon glyphicon-trash kanbanDelete"
          data-toggle="modal" data-target={this.props.dataName}
          type="button"
        >
        </span>
        <div className="modal fade" id={this.props.idname} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <p>Delete Task</p>
                <p>You sent a request to delete this task. Are you sure?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.workDelete(this.props.delete)}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal
