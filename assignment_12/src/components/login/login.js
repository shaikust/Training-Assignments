import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const usernameChange = (event) => {
        setUsername(event.target.value);
        
    };

    const passwordChange = (event) => {
        setPassword(event.target.value);
       
    };

   

    const handleSubmit = (event) => {
        event.preventDefault();
        // const storedCredentials = JSON.parse(localStorage.getItem("formData"));
        if (username==='username' && password==='Password') {
            alert("Login successful!");
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
                    onChange={usernameChange}
                    required
                />
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={passwordChange}
                    pattern="^(?=.*[a-z])(?=.*[A-Z]).*$"
                    title="Must contain at least one uppercase and lowercase letter"
                    required
                />
                <br />
                <div className="btn-container">
                    {/* <button type="submit" className="btn" >Login</button> */}
                    <Button type='submit'>Login</Button>

                    <br />
                    <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
                </div>
            </form>
        </div>
    );
};

export default Login;