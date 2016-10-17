import React, {Component} from 'react'
import franc from 'franc'

const ResultsArea = React.createClass({
  render() {
    return (
      <div id="results">
        {this.francResultsAsHtml(this.props.resultsToDisplay)}
      </div>
    )
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

export default ResultsArea