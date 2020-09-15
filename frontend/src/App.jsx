import React, { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Landing from "./components/layout/Landing";
import Alert from './components/layout/alert'

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/login" component={Landing} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
