import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import loginImg from "../../Images/Login.png";
import { setAlert } from '../../actions/alert';
import "./style.scss";
import PropTypes from 'prop-types';
import { register } from '../../actions/auth'
import { Redirect } from 'react-router-dom';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ email, password });
    }
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
      <form className="base-container" onSubmit={ e => onSubmit(e) }>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Register Form Icon" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Please enter your email address"
                value={email}
                onChange={ e => onChange(e) }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Please enter your password"
                value={password}
                onChange={ e => onChange(e) }
                minLength='6'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Confirm Password <span>*</span>
              </label>
              <input
                type="password"
                name="password2"
                placeholder="Please confirm your password"
                value={password2}
                onChange={ e => onChange(e) }
                required
                minLength='6'
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({ 
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps, 
  { setAlert, register }
)(Register);