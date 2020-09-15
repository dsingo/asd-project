import React, { Fragment } from "react";
import bg from "../../Images/Home-Background.jpg";
import "./Home.scss"

const Home = () => (
  <div className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Opal Manager</h1>
        <div>
          <a href="register.html" className="btn btn-primary">
            Register
          </a>
          <a href="login.html" className="btn btn-secondary">
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
