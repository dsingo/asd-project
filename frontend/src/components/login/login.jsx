import React, { Fragment, useState } from "react";
import loginImg from "../../Images/Login.png";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <form className="base-container" onSubmit={ e => onSubmit(e) }>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Register Form Icon" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
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
              <input
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

export default Login;