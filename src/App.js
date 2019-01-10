import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Random from "./components/Random";
import Todo from "./components/Todo";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Todo} />
          <Route path="/random" exact component={Random} />
        </div>
      </Router>
    );
  }
}

export default App;
