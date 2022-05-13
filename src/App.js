import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Projects from "./components/pages/projects/Projects";
import Bio from "./components/pages/Bio";
import Header from "./components/layout/Header";

import "./App.css";
// import data from "./iamrivas_data.json";

class App extends Component {
  state = {
    isTop: true
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" render={() => <Redirect to="/projects" />} />
          <Route path="/projects/:projectType?" component={Projects} />
          <Route path="/bio" component={Bio} />
        </div>
      </Router>
    );
  }
}

export default App;
