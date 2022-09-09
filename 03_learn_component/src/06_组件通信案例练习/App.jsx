import React, { Component } from "react";
import TabControl from "./TabControl";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "新款", "精选"],
      currentIndex: 0,
    };
  }
  changeIndex(index) {
    this.setState({
      currentIndex: index,
    });
  }
  render() {
    return (
      <div>
        <h2>App</h2>
        <TabControl
          titles={this.state.titles}
          changeIndex={(index) => this.changeIndex(index)}
        />
        <h2>{this.state.titles[this.state.currentIndex]}</h2>
      </div>
    );
  }
}

export default App;
