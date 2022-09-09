import React, { Component } from "react";

class HelloWorld extends Component {
  constructor() {
    super();
    console.log("Hello World constructor");
    this.state = {
      message: "Hello World!",
    };
  }
  changeMessage() {
    this.setState({
      message: "Hello React!",
    });
  }
  render() {
    console.log("Hello World render");
    console.log(document.querySelector(".title"));
    return (
      <div>
        <h2 className="title">{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>change message</button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("------");
    console.log(nextProps, nextState);
    console.log(this.state.message);
    console.log("------");
    return true;
  }
  componentDidMount() {
    console.log(document.querySelector(".title"));
    console.log("Hello World componentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("++++++++");
    console.log(prevProps, prevState, snapshot);
    console.log("++++++++");
    console.log(document.querySelector(".title"));
    console.log("Hello World componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Hello World componentWillUnmount");
  }
  getSnapshotBeforeUpdate() {
    return {
      userName: "foo",
    };
  }
}

export default HelloWorld;
