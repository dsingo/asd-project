import React from "react";
import "./Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/'>
          {" "}Opal Manager{" "}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/login'>Login/Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;