import React, {Component} from 'react'
import ReactDOM from 'react-dom'

var Foo = React.createClass({
  displayName: "HelloMessage",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});

class Blah extends Component {
  render() {
    return (
      <div>Hello world</div>
    )
  }
}

ReactDOM.render(<Blah/>, document.getElementById('content'));