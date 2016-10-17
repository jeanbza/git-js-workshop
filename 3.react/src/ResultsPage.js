import React, {Component} from 'react'

const ResultsPage = React.createClass({
  getInitialState: function() {
    return {inputData: 'No input yet'}
  },

  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <div>
          {this.state.inputData}
        </div>
      </div>
    )
  },

  handleChange(event) {
    this.setState({inputData: event.target.value})
  }
})

export default ResultsPage