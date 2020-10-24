import React, { useState } from "react";
import "./DeleteCard.scss";
import img from "../../Images/Password-Icon.png";
import { deleteSelectedCard } from "../../actions/cards";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

const DeleteCard = ({ setAlert, deleteSelectedCard }) => {
  const [formData, setFormData] = useState({
    id: "",
  });

  const { id } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="main">
      <div className="rect2">
        <form className="base-rect" onSubmit={(e) => onSubmit(e)}>
          <div className="heading">Select a Card to Delete</div>
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

DeleteCard.propTypes = {
  setAlert: PropTypes.func.isRequired,
  deleteSelectedCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setAlert, deleteSelectedCard })(
  DeleteCard
);
