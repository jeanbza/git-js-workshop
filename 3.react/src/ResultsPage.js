import React, {Component} from 'react'
import franc from 'franc'

const ResultsPage = React.createClass({
  getInitialState: function() {
    return {inputData: [['No input yet', 1]]}
  },

  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <div>
          {this.francResultsAsHtml(this.state.inputData)}
        </div>
      </div>
    )
  },

  handleChange(event) {
    const francResults = franc.all(event.target.value)
    this.setState({inputData: francResults})
  },

  francResultsAsHtml(francResults) {
    return francResults.map((result, index) => {
      return (
        <div key={index}>
          {result[0]} - {result[1]}
        </div>
      )
    })
  }
})

export default ResultsPage