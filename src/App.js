import React, { Fragment } from "react";
import "./App.css";
import Addlist from "./components/Addlist";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Addview from "./components/Addview";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Header />
          </div>
          <Switch>
            <Route exact path="/" component={Addlist} />
            <Route path="/addview/:id" component={Addview} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
