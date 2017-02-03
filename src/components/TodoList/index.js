import React, { Component } from 'react'
import Form from './Form'
import List from './List'

type TodoListStateT = {
  items: Array<string>,
  inputValue: string,
}

class TodoList extends Component {
  state: TodoListStateT;

  state = {
    items: [],
    inputValue: '',
  }

  handleChange(val) {
    this.setState({
      inputValue: val,
    })
  }

  handleSubmitItem() {
    const newItemValue = this.state.inputValue
    const newArr = this.state.items.concat(newItemValue)
    this.setState({
      items: newArr,
      inputValue: '',
    })
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div>
        <h1>
          TodoList
        </h1>
        <Form 
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmitItem.bind(this)}
          value={this.state.inputValue} 
        />
        <List />
      </div>
    )
  }
}

export default TodoList
