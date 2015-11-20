import React, {Component} from 'react'
import franc from 'franc'

const ResultsPage = React.createClass({
  whiteList: ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld'],

  getInitialState() {
    return {message: 'Kaapstad is die beste stad'}
  },

  render() {
    const results = franc.all(this.state.message, {whitelist: this.whiteList})

    return (
      <div onClick={this.handleClick}>Hello from ResultsPage.js!</div>
    )
  },

  handleClick() {
    this.setState({message: 'Il y à eu du bien et du moins bien'})
  }
})

export default ResultsPage