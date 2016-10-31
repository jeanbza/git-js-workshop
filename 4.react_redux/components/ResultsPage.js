import React, {Component} from 'react'
import {typeSomeText} from '../actions/actions'

import ResultsArea from './ResultsArea'

const ResultsPage = React.createClass({
  getInitialState() {
    return {inputData: 'No input yet', francResults: []}
  },

  render() {
    const dispatch = this.props.dispatch

    return (
      <div>
        <input id="in" onChange={event => this.handleChange(event, dispatch)}/>
        <ResultsArea francResults={this.props.francResultsReducer} />
      </div>
    )
  },

  handleChange(event, dispatch) {
    this.setState({inputData: event.target.value})
    dispatch(typeSomeText(event.target.value))
  }
})

export default ResultsPage