import React,{Component} from 'react'
import _ from 'lodash';
import Todo from './Todo';

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
        let app = this.props.db.database().ref('todolist');
        app.on('value', snapshot => {this.getData(snapshot.val())});
    };
    
    getData(values){
        let todolistVal = values;
        let todolist = _(todolistVal).keys()
            .map(todoKey => {let cloned = _.clone(todolistVal[todoKey])
            cloned.key = todoKey;
            return cloned
            }).value();

        this.setState({todos: todolist});
    }

    
    render(){
        let todolistNodes = this.state.todos.map((todo) => {
            return (
                <div className="col-12 col-md-4"><Todo content={todo.content} msgKey={todo.key} db={this.props.db} status={todo.isComplete}/></div>
            )
        });


        return(
            <div className="row col-12 todo-list ">
                {todolistNodes}
            </div>
        )
    }
}