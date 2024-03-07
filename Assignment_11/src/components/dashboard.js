// dashboard.js
import React, { useContext } from 'react';
// import ButtonAppBar from '../navbar';
// import './dashboard.css';
import { Link } from 'react-router-dom';
import UserContext from './usercontext';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user)

  return (
    <div className="dashboard">
      {/* <ButtonAppBar /> */}
      <div>
        <h1>Hello {user ? user.username : ''}</h1>
        <Link to="/profile">Go to Profile</Link>
      </div>
    </div>
  );
};

export default Dashboard;
