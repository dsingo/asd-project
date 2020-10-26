import React, { Fragment } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard" >
          <i className="far fa-user-circle"></i> Dashboard
        </Link>
        <Link to="/faq" >
          <i className="far fa-question-circle"></i> FAQ
        </Link>
        <Link to="/contactus" >
          <i className="far fa-id-card"></i> Contact Us
        </Link>
        <Link to="/login" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/faq" >
          <i className="far fa-question-circle"></i> FAQ
        </Link>
        <Link to="/contactus" >
          <i className="far fa-id-card"></i> Contact Us
        </Link>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i> Login/Register
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"> Opal Manager </Link>
      </h1>
      { !loading && (
        <Fragment> 
          { isAuthenticated ? authLinks : guestLinks } 
        </Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);