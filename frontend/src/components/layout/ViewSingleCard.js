import React, { useEffect } from "react";
import "./ViewSingleCard.scss";
import img from "../../Images/Dashboard-Icon.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchCardById } from "../../actions/cards";

const ViewSingleCard = ({ getCard }) => {
  const { id } = useParams();

  useEffect(() => {
    getCard(id);
  },[])

  return (
    <div className="main">
      <div className="rect">
        <div className="opal-heading">{id}</div>
        
      </div>
    </div>
  );
};

//Page will contain delete and top up

ViewSingleCard.propTypes = {
  id: PropTypes.number,
  getCard: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {getCard: searchCardById})(
    ViewSingleCard
);
