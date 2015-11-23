import React, {Component} from 'react'
import ResultsList from './ResultsList'
import {changeInput} from '../actions/actions'
import {connect} from 'react-redux'

const ResultsPage = React.createClass({
  render() {
    const {dispatch} = this.props

    return (
      <div>
        <input type='text'
               placeholder='Type something!'
               onChange={(event) => dispatch(changeInput(event.target.value))}/>
        <ResultsList inputText={this.props.input}/>
      </div>
    )
  }
})

// Wrap the component to inject dispatch and state into it
export default connect((state) => state)(ResultsPage)