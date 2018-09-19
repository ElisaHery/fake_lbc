import React from "react";
import "./App.css";
import Addlist from "./components/Addlist";
import Header from "./components/Header";
// eslint-disable-next-line
const leboncoin = require("leboncoin-api");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Addlist />
        <p> </p>
      </div>
    );
  }
}

export default App;
