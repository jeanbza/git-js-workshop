import React, {Component} from 'react'
import {connect} from 'react-redux'

import {changeInputValue} from '../actions/actions'

const InputArea = React.createClass({
  render() {
    const {dispatch} = this.props

    return (
      <input type='text'
             placeholder='Type something!'
             onChange={(event) => dispatch(changeInputValue(event.target.value))}/>
    )
  }
})

// Wrap the component to inject dispatch and state into it
export default connect((state) => state)(InputArea)