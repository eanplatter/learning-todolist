import React, { Component } from 'react'
import logo from './logo.svg'
import TodoList from './components/TodoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our todolist</h2>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
