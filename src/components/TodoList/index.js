// @flow
import React, { Component } from 'react'
import Form from './Form'
import List from './List'

type ItemT = {
  id: number,
  value: string,
  createdAt: date,
  checked: boolean,
}

type TodoListStateT = {
  items: Array<ItemT>,
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

  handleRemoveItem(id) {
    const currentItems = this.state.items.slice()
    const index = currentItems.map(item => item.id).indexOf(id)
    currentItems.splice(index, 1)
    this.setState({
      items: currentItems,
    })
  }

  handleSubmitItem() {
    if (!this.state.inputValue) return
    const newItem = {
      id: Math.round(Math.random() * 10000000),
      value: this.state.inputValue,
      createdAt: new Date(),
      checked: false,
    }
    const newArr = this.state.items.concat(newItem)
    this.setState({
      items: newArr,
      inputValue: '',
    })
  }

  handleClickDone(id) {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
      return item
    })
    this.setState({
      items,
    })
  }

  render() {
    console.log(this.state)
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
        <List
          listItems={this.state.items}
          onClickDone={this.handleClickDone.bind(this)}
          onClickRemove={this.handleRemoveItem.bind(this)}
        />
      </div>
    )
  }
}

export default TodoList
