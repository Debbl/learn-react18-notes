import React, { Component } from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

export class App extends Component {
  render() {
    return (
      <div>
        <h2>App</h2>
        <NavBar>
          <button>-</button>
          <h2>标题</h2>
          <button>+</button>
        </NavBar>
        <NavBar2
          leftSlot={<button>+1</button>}
          centerSlot={"123"}
          rightSlot={"123"}
        />
      </div>
    );
  }
}

export default App;
