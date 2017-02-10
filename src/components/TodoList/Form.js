// @flow
import React, { Component } from 'react'

type FormPropsT = {
  value: string,
  onChange: Function,
  onSubmit: Function,
}

class Form extends Component {
  props: FormPropsT;

  handleSubmit() {
    this.props.onSubmit()
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleChange(e) {
    e.preventDefault()
    var theValue = e.target.value
    this.props.onChange(theValue)
  }

  render() {
    return (
      <div>
        <input 
          value={this.props.value} 
          onKeyPress={this.handleKeyPress.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    )
  }
}

export default Form
