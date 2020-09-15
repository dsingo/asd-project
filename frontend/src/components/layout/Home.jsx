import React from "react";
import "./Home.scss"
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Opal Manager</h1>
        <div>
          <Link to='/login' className="btn btn-primary">
            Login/Register
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
