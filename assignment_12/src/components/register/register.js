import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const Registration = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmpassword: ''
    });
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmpassword) {
            setPasswordError("Passwords don't match");
            return;
        }
        localStorage.setItem('formData', JSON.stringify(formData));
        showAlert();
    };

    const showAlert = () => {
        alert("Form submitted successfully!");
        window.location.href = "./login";
    };

    return (
        <div className="form">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="FirstName"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="LastName"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    pattern="^(?=.*[a-z])(?=.*[A-Z]).*$"
                    title="Must contain at least one uppercase and lowercase letter"
                    required
                />
                <br />
                <span style={{ color: 'red' }}>{passwordError}</span>
                <br />
                <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    required
                />
                <div className="btn-container">
                   <Button type='submit'>Register</Button>
                    <br />
                    <p>Already have an account? <Link to="/">Login here</Link>.</p>
                </div>
            </form>
        </div>
    );
};

export default Registration;