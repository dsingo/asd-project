import React, { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Landing from "./components/layout/Landing";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <section className="container">
        <Switch>
          <Route exact path="/login" component={Landing} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
