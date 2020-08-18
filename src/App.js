import React,{ Component } from 'react';
import TodoList from './Components/TodoList'
import './App.css';

class  App extends Component {
  render(){
      return (
        <div className="App">
          <header>
              <h1>todo<span>list</span></h1>
              <h2>A simple todo list app built with MERN Stack</h2>
            </header>
          <TodoList />
        </div>
      );

  }
}
 
export default App;
