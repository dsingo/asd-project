import React from 'react';
import './Dashboard.scss';
import img from '../../Images/Dashboard-Icon.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/auth';

const Dashboard = ({
    deleteAccount
}) => {
    return (
        <div>
            <h1 className="title">Dashboard</h1>
            <img className="dashboard-icon" src={img} alt="Colourful dashboard icon" />
            <button className="button bt1" type="button" >Change Email</button>
            <button className="button bt2" type="button" >Change Password</button>
            <button className="delete" type="button" onClick={ () => deleteAccount() }>
                <i class="fas fa-trash-alt"></i> Delete Account
            </button>
        </div>
    )
}

Dashboard.protoTypes = {
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps
    , { deleteAccount })(Dashboard);