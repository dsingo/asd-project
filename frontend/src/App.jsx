import React, { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

const App = () => (
  <Fragment>
    <Navbar/>
    <Landing />
  </Fragment>
);

export default App;