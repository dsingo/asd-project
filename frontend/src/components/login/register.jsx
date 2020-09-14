import React from "react";
import loginImg from "../../Images/Login.png";

export class Register extends React.Component {
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Register Form Icon"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="text" name="email" placeholder="Please enter your email address" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password <span>*</span></label>
              <input type="text" name="password" placeholder="Please enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password <span>*</span></label>
              <input type="text" name="password" placeholder="Please confirm your password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
