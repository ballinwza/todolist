import React,{Component}from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            isComplete: props.status,
            contentUpdate: props.msg,
        }
        
    }


    handelDelete=(e)=>{
        e.preventDefault();
        let dbCon = this.props.db.database().ref('/todolist')
        dbCon.child(this.props.msgKey).remove();
    }

    handleUpdate = (e) =>{
        e.preventDefault();
        var obj = {content: this.state.contentUpdate};
        let dbCon = this.props.db.database().ref('/todolist');
        dbCon.child(this.props.msgKey).update(obj);
        this.setState({contentUpdate:''})
        
    }

    updateStatus = (e) =>{
        e.preventDefault();
        var obj = {isComplete: this.state.isComplete};
        let dbCon = this.props.db.database().ref('/todolist');
        dbCon.child(this.props.msgKey).update(obj);
    }



    handleChange = (e) =>{
        this.setState({
            contentUpdate: e.target.value
        })
    }

    render(){
        console.log(this.state.isComplete)
        return(
                <div className="todo-body">
                    <div className="todo-body-text">{this.props.content} </div>
                    <div>
                        <div className="btn-edit" data-toggle="collapse" href={`#${this.props.msgKey}`} aria-expanded="false"  aria-controls={this.props.msgKey}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </div>
                        <div className="btn-delete" onClick={this.handelDelete}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </div>
                        <div className="collapse" id={this.props.msgKey}>
                            <input type="text" className="form-control-edit form-control" name={this.props.msgKey} placeholder="Changing Todo" onChange={this.handleChange} value={this.state.contentUpdate}/>
                            <div>
                                <div className="btn-submit" 
                                onClick={this.handleUpdate} 
                                data-toggle="collapse" href={`#${this.props.msgKey}`} 
                                aria-expanded="false"  aria-controls={this.props.msgKey}>
                                    <FontAwesomeIcon icon={faCheckCircle}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}