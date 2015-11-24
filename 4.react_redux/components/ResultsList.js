import React, {Component} from 'react'
import {connect} from 'react-redux'

const ResultsList = React.createClass({
  render() {
    const {inputValue, francResults} = this.props

    return (
      <div>
        <div>Input was: {inputValue}</div>
        <div>{this.resultsList(francResults)}</div>
      </div>
    )
  },

  resultsList(results) {
    return results.map(function(result, index) {
      return (
        <div key={index}>{result[0]} - {result[1]}</div>
      )
    })
  }
})

// Wrap the component to inject dispatch and state into it
export default connect((state) => state)(ResultsList)