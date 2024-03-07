import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:3001/profiles');
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfileData(data);
        console.log(profileData);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      {profileData ? (
        <div>
          <h1>Profile</h1>
          <p>Name: {profileData.name}</p>
          <p>Country: {profileData.country}</p>
          <p>Gender: {profileData.gender}</p>
          <p>PAN: {profileData.pan}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
