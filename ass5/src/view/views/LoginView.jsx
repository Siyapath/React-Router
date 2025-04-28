import React, { useState, useContext } from 'react';
import './LoginView.css';
import { AuthContext } from '../context/LoginRegContext';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = email.split('@')[0];
    setUsername(username);
    navigate('/');
  };

  return (
    <div className="login-view">
      
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
