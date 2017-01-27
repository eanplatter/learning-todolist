import React, { Component } from 'react'
// import Form from './Form'
import List from './List'

class TodoList extends Component {
  state = {
    items: [],
    inputValue: '',
  }
  render() {
    console.log('This is the val', this.state.inputValue)
    return (
      <div>
        <h1>
          {this.state.inputValue}
        </h1>
        <input onChange={(e) => {
          const value = e.target.value
          this.setState({
            inputValue: value,
          })
        }} />
        <List />
      </div>
    )
  }
}

export default TodoList
