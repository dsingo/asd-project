import React, { useEffect, useState } from "react";
import "./ViewSingleCard.scss";
import img from "../../Images/Card-Icon.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  searchCardById,
  addToCard,
  deleteSelectedCard,
} from "../../actions/cards";

const ViewSingleCard = ({ getCard }) => {
  const [formData, setFormData] = useState({
    amount: "",
  });

  const { amount } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { id } = useParams();

  useEffect(() => {
    getCard(id);
  });

  const DeleteCard = async (e) => {
    e.preventDefault();
    deleteSelectedCard(id);
  };

  const TopUpCard = (e) => {
    e.preventDefault();
    addToCard(id, amount);
  };

  return (
    <div className="main">
      <div className="rect">
        <form className="base-rect" onSubmit={(e) => TopUpCard(e)}>
          <div className="settings heading">Opal Card Settings</div>
          <img className="opalcard" src={img} alt="Colourful email icon" />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input
                  className="input input2"
                  type="number"
                  name="topup"
                  placeholder="Please enter a top up amount"
                  value={amount}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn submit">
            Top Up
          </button>
        </form>

        <button className="delete2" onclick={DeleteCard}>
          Delete Card
        </button>
      </div>
    </div>
  );
};

//Page will contain delete and top up

ViewSingleCard.propTypes = {
  id: PropTypes.number,
  getCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getCard: searchCardById })(
  ViewSingleCard
);
