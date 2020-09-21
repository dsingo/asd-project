import React, { useState } from "react";
import "./EditEmail.scss";
import img from '../../Images/Email-Icon.png';
import { updateEmail } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EditEmail = ({ updateEmail }) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    updateEmail({ email });
  }

  return (
    <div className="main">
      <div className="rect">
        <form className="base-rect" onSubmit={ e => onSubmit(e) }>
          <div className="heading">Change your email</div>
          <img className="icon" src={img} alt="Colourful email icon" />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input className="input"
                  type="email"
                  name="email"
                  placeholder="Please enter your updated email"
                  value={email}
                  onChange={ e => onChange(e) }
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

EditEmail.propTypes = {
  updateEmail: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
  
});

export default connect(
  mapStateToProps, 
  { updateEmail }
)(EditEmail);