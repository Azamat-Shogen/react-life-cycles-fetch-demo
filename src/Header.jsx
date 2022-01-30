import React, { Component } from "react";

export default class Header extends Component {
  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return (
      <div>
        <h1>I am a Header </h1>
      </div>
    );
  }
}
