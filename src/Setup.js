import React, { Component } from 'react';

class Setup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            data: ''
        }
        this.updateState = this.updateState.bind(this)
    }
    updateState(e) {
        this.setState({data: e.target.value});
     }
    componentDidMount () {
        let atr = localStorage.getItem("setup");
        if (atr) {
            this.setState({data: atr});
        }
    }
    setUp = (e) => {
        let text = this.refs.name.value
        localStorage.setItem('setup', text)
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
                                    <div class="input-group input-group-lg">
                                        <span class="input-group-addon">Max to-do tasks</span>
                                        <input type="text" class="form-control"
                                            value = {this.state.data}
                                            ref ='name'
                                            onChange = {this.updateState} 
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success" onClick={this.setUp}>Save</button>
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