import React, { Component } from "react";
import Children from "./Children";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment(count) {
    this.setState({
      counter: this.state.counter + count,
    });
  }
  decrement(count) {
    this.setState({
      counter: this.state.counter - count,
    });
  }
  render() {
    return (
      <div>
        <h2>Counter {this.state.counter}</h2>
        <Children
          increment={(count) => this.increment(count)}
          decrement={(count) => this.decrement(count)}
        />
      </div>
    );
  }
}

export default App;
