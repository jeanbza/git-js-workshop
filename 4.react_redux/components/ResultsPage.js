import React, {Component} from 'react'
import ResultsList from './ResultsList'

const ResultsPage = React.createClass({
  getInitialState() {
    return {inputText: 'No input text detected'}
  },

  render() {
    return (
      <div>
        <input type="text"
               placeholder="Type something!"
               onChange={(event) => this.handleChange(event.target.value)}/>
        <ResultsList inputText={this.state.inputText} />
      </div>
    )
  },

  handleChange(inputTextValue) {
    this.setState({inputText: inputTextValue})
  }
})

export default ResultsPage