import React, { Fragment, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home.jsx";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/alert";
import { loadUser } from "./actions/auth";
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/layout/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import EditEmail from './components/layout/EditEmail';
import EditPassword from './components/layout/EditPassword';
import FAQ from './components/layout/FAQ';
import Contact from './components/layout/Contact';
import TripHistory from './components/layout/TripHistory';

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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/editemail" component={EditEmail} />
              <PrivateRoute exact path="/editpassword" component={EditPassword} />
              <PrivateRoute exact path="/trips" component={TripHistory} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/contactus" component={Contact} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
