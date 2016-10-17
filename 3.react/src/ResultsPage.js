import React, {Component} from 'react'
import franc from 'franc'
import ResultsArea from './ResultsArea'

const ResultsPage = React.createClass({
  getInitialState: function() {
    return {inputResults: [['No input yet', 1]]}
  },

  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <ResultsArea resultsToDisplay={this.state.inputResults}/>
      </div>
    )
  },

  handleChange(event) {
    const francResults = franc.all(event.target.value)
    this.setState({inputResults: francResults})
  },
})

export default ResultsPage