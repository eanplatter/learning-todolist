import React, { Component } from 'react'

class Item extends Component {
  handleClick() {
    this.props.onClickDone(this.props.listItem.id)
  }

  render() {
    const textDecoration = this.props.listItem.checked && 'line-through'
    return (
      <div style={{ textDecoration: textDecoration }}>
        {this.props.listItem.value}
        <button onClick={this.handleClick.bind(this)}>Done</button>
      </div>
    )
  }
}

export default Item
