import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'

const ViewProfile = () => {
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
      {/* {loading ? (
        <p>Loading user data...</p>
      ) : ( */}
        <div>
          <p>Name:you {userData.firstName} {userData.lastName}!</p>
          <p>Balance:you ₹{userData.balance}</p>
          <p>Email: y{userData.email}</p>
          <p>Phone Number:y {userData.phoneNumber}</p>
          <p>Address:y {userData.address}</p>
          <p>Aadhar:y {userData.aadhar}</p>
          {/* Add more user information as needed */}
          <div style={{width:'50%',margin:'5px auto'}}>
            <button>Activate </button>
          </div>
        </div>
     {/* )} */}
    </div>
  );
};

export default ViewProfile;