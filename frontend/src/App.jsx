import React, { Fragment, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/alert";
import { loadUser } from "./actions/auth";
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/layout/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import EditEmail from './components/layout/EditEmail';

//Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/editemail" component={EditEmail} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
