import React, { useState } from 'react';
import axios from 'axios';
import './OnlineBankingRegister.css';

function OnlineRegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter and one number.');
      return;
    }

    try {
      const response = await axios.post('/api/register', {
        username,
        password,
        email,
      });

      if (response.status === 201) {
        setErrorMessage('');
        console.log('Registration successful! You can now log in.');
      }
    } catch (error) {
      console.error('Registration failed. Please try again.');
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.[A-Z])(?=.\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <h2>Register for Online Banking</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <br></br>
      <br></br>
      <button onClick={handleRegister}>Register</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default OnlineRegistrationForm;