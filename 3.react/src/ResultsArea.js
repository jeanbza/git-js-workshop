import React, {Component} from 'react'
import franc from 'franc'

const ResultsArea = React.createClass({
  whitelist: ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld'],

  render() {
    const inputText = this.props.inputText
    const results = franc.all(inputText, {'whitelist': this.whitelist})

    return (
      <div>
        <div>ResultsArea.js: {inputText}</div>
        <div>{this.resultsList(results)}</div>
      </div>
    )
  },

  resultsList(results) {
    return results.map(function(result) {
      return (
        <div>{result[0]} - {result[1]}</div>
      )
    })
  }
})

export default ResultsArea