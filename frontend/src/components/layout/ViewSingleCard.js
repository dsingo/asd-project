import React, { useEffect, useState } from "react";
import "./ViewSingleCard.scss";
import img from "../../Images/Card-Icon.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  searchCardById,
  deleteSelectedCard,
  topUpCard,
} from "../../actions/cards";
import axios from "axios";

const ViewSingleCard = ({ getCard, topUp }) => {
  //const history = useHistory();

  const [formData, setFormData] = useState({
    amount: "",
  });

  const { amount } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { id } = useParams();

  const [{ name, balance, type }, setCard] = useState({
    name: "",
    balance: "",
    type: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ id: id });
    axios
      .get("/cards", { params })
      .then(({ data }) => setCard(data[0]))
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
  }, [id]);

  const DeleteCard = async (e) => {
    e.preventDefault();
    deleteSelectedCard();
  };

  const TopUpCard = async (e) => {
    e.preventDefault();
    topUp(id, amount);
  };

  return (
    <div className="main">
      <div className="rect">
        <form className="base-rect" onSubmit={(e) => TopUpCard(e)}>
          <img className="opalcard" src={img} alt="Colourful email icon" />
          <div className="content">
            <div className="form">
              <div className="form-group">
                {loading ? (
                  <h3 className="settings heading">loading...</h3>
                ) : (
                  <h3 className="settings heading">
                    {name} - ${balance} - {type}
                  </h3>
                )}
                <input
                  className="input input2"
                  type="text"
                  name="amount"
                  placeholder="Please enter a top up amount"
                  value={amount}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
          </div>
          <button type="button" className="btn submit" onClick={TopUpCard}>
            Top Up
          </button>
        </form>

        <button type="submit" className="delete2" onClick={DeleteCard}>
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

export default connect(mapStateToProps, {
  getCard: searchCardById,
  topUp: topUpCard,
})(ViewSingleCard);
