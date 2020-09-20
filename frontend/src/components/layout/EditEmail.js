import React from "react";
import "./EditEmail.scss";
import img from '../../Images/Email-Icon.png'

const EditEmail = () => {
  return (
    <div className="login">
      <div className="container">
        <form className="base-container">
          <div className="header">Change your email</div>
          <img className="icon" src={img} alt="Colourful email icon" />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your updated email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmail;
