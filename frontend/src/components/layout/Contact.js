import React, { useState } from "react";
import "./Contact.scss";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactImg from '../../Images/Contact-Icon.png'
init("user_ZQAqaOwmGadY9M30GdsZp");

const Contact = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const { name, message, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    emailjs.send("service_1br1vws", "template_sq4cs9n", {
      from_name: name,
      message: message,
      from_email: email,
    });
    setAlert("Your email has been sent successfully", "success");
  };

  return (
    <div className="contact">
      <div className="rect">
        <form className="base-rect" onSubmit={(e) => onSubmit(e)}>
          <div className="heading">Contact Us</div>
          <div className="image">
            <img className="image" src={contactImg} alt="Register Form Icon" />
          </div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label>
                  Name<span> *</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Please enter your name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                />
                <label>
                  Email<span> *</span>
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Please enter your email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
                <label>
                  Message<span> *</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="message"
                  placeholder="Please enter a message"
                  value={message}
                  onChange={(e) => onChange(e)}
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

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setAlert })(Contact);