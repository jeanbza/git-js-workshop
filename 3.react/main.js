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


ReactDOM.render(React.createElement(Foo, { name: "John" }), document.getElementById('content'));