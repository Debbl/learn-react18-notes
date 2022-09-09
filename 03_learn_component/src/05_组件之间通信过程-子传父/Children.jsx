import React, { Component } from "react";

export class Children extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  render() {
    const { increment, decrement } = this.props;
    return (
      <div>
        <button onClick={() => increment(1)}>+</button>
        <button onClick={() => decrement(1)}>-</button>
      </div>
    );
  }
}

export default Children;
