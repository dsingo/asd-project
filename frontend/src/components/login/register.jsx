import React, { Fragment, useState } from "react";
import loginImg from "../../Images/Login.png";
import "./style.scss";

const Register = () => {
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
      console.log('Password do not match');
    } else {
      console.log(formData);
    }
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
                minLength='6'
                required
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

export default Register;