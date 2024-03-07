import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import  UserContext  from './usercontext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    validateForm(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validateForm(username, event.target.value);
  };

  const validateForm = (username, password) => {
    setFormValid(username.trim() !== '' && password.trim() !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const storedCredentials = JSON.parse(localStorage.getItem("formData"));
    if (username === 'username@gmail.com' && password === 'Password123') {
      alert("Login successful!");
      setUser({ username });
      window.location.href = '/dashboard';
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one number, one uppercase and lowercase letter, and at least 6 characters"
          required
        />
        <br />
        <div className="btn-container">
          <button type="submit" className="btn" disabled={!formValid}>Login</button>
          <br />
          {/* <p>Don't have an account? <Link to="/register">Register here</Link>.</p> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
