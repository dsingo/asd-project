import React, { useState } from "react";
import axios from "axios";
import "./AddCard.scss";
import img from "../../Images/Card-Icon.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect, withRouter } from "react-router-dom";
import { addNewCard } from "../../actions/cards";

const AddCard = ({ addNewCard }) => {
  const [formData, setFormData] = useState({
    card: {
      nickname: "",
      type: "Adult",
    },
  });

  const cardTypes = ["Adult", "Concession", "Child"];

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const addCard = (e) => {
    e.preventDefault();
    addNewCard(formData.card);
  };

  return (
    <div className="main">
      <div className="rect">
        <form className="base-rect" addCard={(e) => addCard(e)}>
          <div className="heading">Add a new card</div>
          <img className="icon" src={img} alt="Colourful opal icon" />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="nickname">Card Nickname</label>
                <input
                  name="nickname"
                  value={formData.card.nickname}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="type">Card Type</label>
                <select
                  value={formData.card.type}
                  onChange={(e) => onChange(e)}
                >
                  {cardTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn" onClick={addCard}>
            Add New Card
          </button>
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
