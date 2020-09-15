import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="dashboard.html">
          {" "}Opal Manager{" "}
        </a>
      </h1>
      <ul>
        <li>
          <a href="/user">Login/Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;