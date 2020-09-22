import React, { useState } from "react";
import "./EditPassword.scss";
import img from "../../Images/Password-Icon.png";
import { updatePassword } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

const EditPassword = ({ setAlert, updatePassword }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    password1: "",
    password2: "",
  });

  const { oldPassword, password1, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
        updatePassword({ oldPassword, password1 });
    }
  };

  return (
    <div className="main">
      <div className="rect2">
        <form className="base-rect" onSubmit={(e) => onSubmit(e)}>
          <div className="heading">Change your password</div>
          <img className="icon" src={img} alt="Colourful email icon" />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input
                  className="input"
                  type="password"
                  name="oldPassword"
                  placeholder="Please enter your current password"
                  required
                  value={oldPassword}
                  minLength="6"
                  onChange={(e) => onChange(e)}
                />
                <input
                  className="input"
                  type="password"
                  name="password1"
                  placeholder="Please enter your new password"
                  required
                  minLength="6"
                  onChange={(e) => onChange(e)}
                  value={password1}
                />
                <input
                  className="input"
                  type="password"
                  name="password2"
                  placeholder="Please confirm your new password"
                  required
                  minLength="6"
                  onChange={(e) => onChange(e)}
                  value={password2}
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

EditPassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setAlert, updatePassword })(
  EditPassword
);
