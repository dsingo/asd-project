import React, { useState } from "react";
import "./AddCard.scss";
import img from "../../Images/Card-Icon.png";
import { useNavigate } from "@reach/router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNewCard } from "../../actions/cards";
//import { setAlert } from "../../actions/alert";
// import CardsContext from '../../co';

const AddCard = ({ addNewCard }) => {
  // const { dispatch } = useContext(CardsContext);
  const navigate = useNavigate();

  const [card, setCard] = useState({
    nickname: "",
    type: "Adult",
    balance: 0,
  });

  const setNickname = (e) => {
    const newNickname = e.target.value;

    setCard({
      ...card,
      nickname: newNickname,
    });
  };

  const setCardType = (e) => {
    const newCardType = e.target.value;

    setCard({
      ...card,
      type: newCardType,
    });
  };

  const cardTypes = ["Adult", "Concession", "Child"];

  const addCard = (e) => {
    e.preventDefault();
    const action = {
      type: "ADD_CARD",
      card: card,
    };
    // dispatch(action);
    navigate("/");
  };

  return (
    <div className="main">
      <div className="rect">
        <form className="base-rect">
          <div className="heading">Add a new card</div>
          <img className="icon" src={img} alt="Colourful opal icon" />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="nickname">Card Nickname</label>
                <input
                  name="nickname"
                  value={card.nickname}
                  onChange={setNickname}
                />
                <label htmlFor="type">Card Type</label>
                <select value={card.type} onChange={setCardType}>
                  {cardTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button type="submit" onClick={addCard}>
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
