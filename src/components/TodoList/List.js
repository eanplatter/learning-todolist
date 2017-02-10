import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
  handleClickDone(id) {
    this.props.onClickDone(id)
  }

  handleRemoveItem(id) {
    this.props.onClickRemove(id)
  }

  render() {
    const items = this.props.listItems
    const renderedItems = items.map(item => {
      return (
        <li key={item.id}>
          <Item listItem={item} onClickDone={this.handleClickDone.bind(this)} onClickRemove={this.handleRemoveItem.bind(this)} />
        </li>
      )
    })
    return (
      <div>
        List
        <ul>
          {renderedItems}
        </ul>
      </div>
    )
  }
}

export default List
