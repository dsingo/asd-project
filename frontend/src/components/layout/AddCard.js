import React, { useState } from "react";
import axios from "axios";
import "./AddCard.scss";
import img from "../../Images/Card-Icon.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect, withRouter } from "react-router-dom";
import { addNewCard } from "../../actions/cards";

function AddCard(props) {
  const [nickname, setNickname] = useState("");
  const [userID, setUserID] = useState("xxxxxxxxxxxxxxxxxxxxxxxx");
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState("");
  const [type, setType] = useState("Adult");
  const cardTypes = ["Adult", "Concession", "Child"];

      const addCard = (e) => {
        e.preventDefault();
        const card = {
          id: userID,
          nickname: nickname,
          balance: balance,
          type: type,
          history: history,
        };
        addNewCard(card);
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
                  value={nickname}
                  onChange={setNickname}
                />
                <label htmlFor="type">Card Type</label>
                <select value={type} onChange={setType}>
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
}
