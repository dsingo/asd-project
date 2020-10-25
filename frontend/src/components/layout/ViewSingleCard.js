import React from "react";
import "./ViewSingleCard.scss";
import img from "../../Images/Dashboard-Icon.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ViewSingleCard = ({id}) => {
    //const { id } = useParams();
    return (<p>{id}</p>)
}

//Page will contain delete and top up

ViewSingleCard.propTypes = {
    id: PropTypes.number
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {  })(ViewSingleCard);