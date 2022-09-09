import React, { Component } from "react";
import Footer from "./Main/Footer";
import Header from "./Main/Header";
import Main from "./Main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
