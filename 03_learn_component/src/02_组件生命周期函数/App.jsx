import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

export class App extends Component {
  constructor() {
    super();
    console.log("App constructor");
    this.state = {
      isShow: true,
    };
  }
  switchShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  render() {
    console.log("App render");
    const { isShow } = this.state;
    return (
      <div>
        <h2>App</h2>
        <button onClick={() => this.switchShow()}>switch show</button>
        {isShow && <HelloWorld />}
      </div>
    );
  }
}

export default App;
