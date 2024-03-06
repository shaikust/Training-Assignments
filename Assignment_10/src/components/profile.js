// Profile.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
  const user = useSelector(state => state.user);

  return (
    <div>
      <h2>Personal Details</h2>
      <p>Name: {user.name}</p>
      <p>Country: {user.country}</p>
      <p>Gender: {user.gender}</p>
      <p>Permanent Account Number: {user.pan}</p>
      <Link to="/education">Go to Education Details</Link>
    </div>
  );
}

export default Profile;
