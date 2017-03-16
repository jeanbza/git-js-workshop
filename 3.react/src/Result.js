import React from 'react'

export default class Result extends React.Component {
  render() {
    return <tr>
      <td>{this.props.num + 1}</td>
      <td>{this.props.lang}</td>
      <td>{Math.round(this.props.percent * 100)}%</td>
    </tr>
  }
}