import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
  render() {
    return (
      <div>
        List
        <ul>
          <Item />
        </ul>
      </div>
    )
  }
}

export default List
