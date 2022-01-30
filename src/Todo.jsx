import React from "react";

export default class Todo extends React.PureComponent {
  render() {
    console.log("Child component called");
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
