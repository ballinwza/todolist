import React,{Component} from 'react'

export default class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:'',
            isComplete:false
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        if(e.target.value !== ""){
            const {content,isComplete} = this.state
            e.preventDefault();
            let dbCon = this.props.db.database().ref('/todolist');
            dbCon.push({content: content, isComplete:isComplete});
            this.setState({content: ''});
        }
    }

   

    render(){
        return(
            <form className="todoForm" onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" name="content"
                placeholder="What needs to be done?"
                onChange={this.handleChange}
                value={this.state.content}
                />
            </form>
        )
    }
}