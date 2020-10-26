import React from "react";
import "./Dashboard.scss";
import img from "../../Images/Dashboard-Icon.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/auth";
import { Link } from "react-router-dom";

const Dashboard = ({ deleteAccount }) => {
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <img
        className="dashboard-icon"
        src={img}
        alt="Colourful dashboard icon"
      />
      <Link to="/editemail" className="button bt1" type="button">
        Change Email
      </Link>
      <Link to="/editpassword" className="button bt2" type="button">
        Change Password
      </Link>
      <Link to="/addcard" className="button bt3" type="button">
        Add Card
      </Link>
      <Link to="/viewcards" className="button bt4" type="button">
        View Cards
      </Link>
      <button className="delete" type="button" onClick={() => deleteAccount()}>
        <i className="fas fa-trash-alt"></i> Delete Account
      </button>
    </div>
  );
};

Dashboard.protoTypes = {
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteAccount })(Dashboard);
