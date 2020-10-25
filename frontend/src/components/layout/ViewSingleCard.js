import React, { useEffect, useState } from "react";
import "./ViewSingleCard.scss";
import img from "../../Images/Dashboard-Icon.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchCardById } from "../../actions/cards";

const ViewSingleCard = ({ getCard }) => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    amount: "",
  });

  useEffect(() => {
    getCard(id);
  }, []);

  const { amount } = formData;

  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const DeleteCard = () => {};

  const TopUpCard = () => {};

  return (
    <div className="main">
      <div className="rect">
        <div className="opal-heading">{id}</div>
        <div class="topupcard">
          <label>
            Top Up Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => onFormChange(e)}
            />
          </label>
          <button onclick={TopUpCard}>Top Up Card</button>
        </div>
        <div class="deletecard">
          <button onclick={DeleteCard}>Delete Card</button>
          <p>This is irreversible. </p>
          <p>Do not click unless you are very sure.</p>
        </div>
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
