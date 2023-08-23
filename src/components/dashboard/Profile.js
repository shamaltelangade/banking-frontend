import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'API_URL' with the actual API endpoint
    axios.get('API_URL')
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Your Bank Profile</h1>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <div>
          <p>Welcome, {userData.firstName} {userData.lastName}!</p>
          <p>Account Number: {userData.accountNumber}</p>
          <p>Balance: ₹{userData.balance}</p>
          <p>Email: {userData.email}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>Address: {userData.address}</p>
          {/* Add more user information as needed */}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;