import React, { useState } from "react";
import "./TopUpCard.scss";
import img from "../../Images/Password-Icon.png";
import { addToCard } from "../../actions/cards";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

const EditPassword = ({ setAlert, addToCard }) => {
  const [formData, setFormData] = useState({
    id: "",
    amount: "",
  });

  const { id, amount } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="main">
      <div className="rect2">
        <form className="base-rect" onSubmit={(e) => onSubmit(e)}>
          <div className="heading">Top up your card below!</div>
          <img className="icon" src={img} alt="Colourful email icon" />
          <div className="content">
            <div className="form">
              <p>Placeholder</p>
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

TopUpCard.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addToCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setAlert, addToCard })(
  TopUpCard
);
