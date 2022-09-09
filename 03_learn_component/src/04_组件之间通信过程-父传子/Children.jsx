import React, { Component } from "react";

export class Children extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  render() {
    const { names } = this.props;
    return (
      <div>
        <h2>Children</h2>
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Children;
