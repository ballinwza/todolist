import React,{Component} from 'react'
import firebase from 'firebase';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Footer from './components/Footer';

class App extends Component {
    constructor(props){
        super(props);

        const firebaseConfig={
            apiKey: "AIzaSyAB6szvgc1lYezMjyc4yesxx0ffhiqPsec",
            authDomain: "todolist-tradon.firebaseapp.com",
            databaseURL: "https://todolist-tradon-default-rtdb.firebaseio.com",
            projectId: "todolist-tradon",
            storageBucket: "todolist-tradon.appspot.com",
            messagingSenderId: "425894817033",
            appId: "1:425894817033:web:89f2666ec63a251b99f7d8",
            measurementId: "G-2P0R4CP0JC"
        }
        firebase.initializeApp(firebaseConfig);

    }

    render(){
        
        return(
            <div className="main">
                <div className="row">
                    <div  className="head-text col-12"><h1>tardOs</h1></div>
                    <div className="todo-form col-12">
                        <TodoForm db={firebase} />
                    </div>
                    <div className="col-12">
                        <TodoList db={firebase}/>
                    </div>
                </div>
                <Footer />
           </div>
        )
    }
}

export default App;