// LoginComponent.js
import React, { useState } from 'react';

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginClick = () => {
    if (username === 'prasad' && password === 'ponala') {
      onLogin(username, password);
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLoginClick}>Login</button>

      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
