import React, { Component } from "react";
import Children from "./Children";

export class App extends Component {
  render() {
    return (
      <div>
        <div>App</div>
        <Children names={["aaa", "bbb", "ccc"]} />
      </div>
    );
  }
}

export default App;
