import React, { useState } from "react";
import "./AddCard.scss";
import img from "../../Images/Card-Icon.png";
import { addNewCard } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AddCard = ({ addNewCard }) => {
  const [formData, setFormData] = useState({
    cardnumber: 0000000000000000,
    cardexpiry: new Date(),
    cardcvv: 000,
    cardname: "",
  });

  const { cardnumber, cardexpiry, cardcvv, cardname } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const card = {
      number: cardnumber,
      expiry: cardexpiry,
      cvv: cardcvv,
      name: cardname,
    };
    updateCard({ card });
  };

  return (
    <div className="main">
      <div className="rect">
        <form className="base-rect" onSubmit={(e) => onSubmit(e)}>
          <div className="heading">Add a new credit/debit card</div>
          <img
            className="icon"
            src={img}
            alt="Outline rendering of credit card"
          />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input
                  className="input"
                  type="string"
                  name="cardnumber"
                  placeholder="Please enter your card number"
                  value={cardnumber}
                  onChange={(e) => onChange(e)}
                  required
                />
                <input
                  className="input"
                  type="date"
                  name="cardexpiry"
                  placeholder="Please enter your card expiry date"
                  value={cardexpiry}
                  onChange={(e) => onChange(e)}
                  required
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Please enter your updated email"
                  value={cardnumber}
                  onChange={(e) => onChange(e)}
                  required
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Please enter your updated email"
                  value={cardnumber}
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

AddCard.propTypes = {
  addNewCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addNewCard })(AddCard);
