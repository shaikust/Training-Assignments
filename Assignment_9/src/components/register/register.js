import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        dob: '',
        gender: 'Male',
        password: '',
        confirmpassword: '',
        terms: false
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
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
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
                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />
                <label htmlFor="gender">Gender:</label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    /> Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    /> Female
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Must contain at least one number, one uppercase and lowercase letter, and at least 6 characters"
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
                <input
                    type="checkbox"
                    name="terms"
                    value="agree"
                    checked={formData.terms}
                    onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                    required
                /> I agree to the terms and conditions
                <br /><br />
                <div className="btn-container">
                    <button type="submit" className="btn">Register</button>
                    <br />
                    <p>Already have an account? <Link to="/">Login here</Link>.</p>
                </div>
            </form>
        </div>
    );
};

export default Registration;
