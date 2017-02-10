import React, { Component } from 'react'

class Item extends Component {
  handleClick() {
    this.props.onClickDone(this.props.listItem.id)
  }

  handleRemoveItem() {
    this.props.onClickRemove(this.props.listItem.id)
  }

  render() {
    const textDecoration = this.props.listItem.checked && 'line-through'
    return (
      <div style={{ textDecoration: textDecoration }}>
        {this.props.listItem.value}
        <button onClick={this.handleClick.bind(this)}>
          {this.props.listItem.checked ? 'Undo' : 'Done'}
        </button>
        <button onClick={this.handleRemoveItem.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default Item
