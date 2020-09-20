import React from 'react';
import './Dashboard.scss';
import img from '../../Images/Dashboard-Icon.png'

const Dashboard = () => {
    return (
        <div>
            <h1 className="title">Dashboard</h1>
            <img className="dashboard-icon" src={img} alt="Colourful dashboard icon" />
            <button className="button bt1" type="button" >Change Email</button>
            <button className="button bt2" type="button" >Change Password</button>
        </div>
    )
}

export default Dashboard;