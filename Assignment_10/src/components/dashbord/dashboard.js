import React, { useState } from 'react';
import ButtonAppBar from '../navbar';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Dashboard = () => {
   
  const name = useSelector(state => state.user.name);
    return (
      <div className="dashboard">
          <ButtonAppBar/>
      <div>
      <h1>Hello {name}</h1>
      <Link to="/profile">Go to Profile</Link>
      </div>
      </div>
    );
};

export default Dashboard;
