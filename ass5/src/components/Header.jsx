import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../context/LoginRegContext'; 

const Header = () => {
  const navigate = useNavigate();
  const { username } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo" src="/images/hmm.png" alt="Logo" />
      </Link>

      {username && <h1>Welcome, {username}!</h1>}

      <div className="header-buttons">
        {username ? (
          <p className="welcome">Hi {username}</p>
        ) : (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
