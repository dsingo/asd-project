import React, { Fragment, useState } from "react";
import loginImg from "../../Images/Login.png";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from "react-router-dom"; //and link

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
      <form className="base-container" onSubmit={ e => onSubmit(e) }>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img className="image" src={loginImg} alt="Register Form Icon" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="input"
                type="email"
                name="email"
                placeholder="Please enter your email address"
                value={email}
                onChange={ e => onChange(e) }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="input"
                type="password"
                name="password"
                placeholder="Please enter your password"
                minLength="6"
                value={password}
                onChange={ e => onChange(e) }
                required
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({ 
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);