import React, {Component} from 'react'
import franc from 'franc'
import Result from './Result'

export default class ResultsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {sentence: ''}
  }

  handleChange(e) {
    this.setState({sentence: e.target.value})
  }

  render() {
    const arrayOfLangArray = franc.all(this.state.sentence)
    const langIdTable = arrayOfLangArray
      .map((res, i) => <Result num={i} lang={res[0]} percent={res[1]} key={i}/>)
      .splice(0, 10)
    return (
      <div>
        <div>{this.state.sentence}</div>

        <label>Type Here! </label>
        <input onChange={this.handleChange.bind(this)}></input>
        <table>
          <thead>
          <tr>
            <th>Result Number</th>
            <th>Language</th>
            <th>Percentage Likely</th>
          </tr>
          </thead>
          <tbody>{langIdTable}</tbody>
        </table>
      </div>
    )
  }
}