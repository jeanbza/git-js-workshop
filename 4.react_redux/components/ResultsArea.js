import React, {Component} from 'react'

const ResultsArea = React.createClass({
  render() {
    const formattedFrancResults = this.formatFrancResults(this.props.francResults)

    return (
      <div>{formattedFrancResults}</div>
    )
  },

  formatFrancResults(francResults) {
    return francResults.map((result, index) => {
      return (
        <div key={index}>
          {result[0]} - {result[1]}
        </div>
      )
    })
  },
})

export default ResultsArea