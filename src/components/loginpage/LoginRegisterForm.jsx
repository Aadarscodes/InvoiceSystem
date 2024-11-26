

import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { validateUsername, validateEmail, validatePassword } from './validation.js';

// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection




function LoginRegisterForm() {
    const [isActive, setIsActive] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });

    // const navigate = useNavigate(); // Initialize navigate function

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const usernameError = validateUsername(formData.username);
        const emailError = isActive ? validateEmail(formData.email) : ''; // Only validate email for signup
        const passwordError = validatePassword(formData.password);

        setErrors({
            username: usernameError,
            email: emailError,
            password: passwordError,
        });

        if (!usernameError && !emailError && !passwordError) {
            try {
                if (isActive) {
                    // Register user
                    const response = await axios.post('http://localhost:5000/signup', formData);
                    console.log(response.data.message);
                    // Redirect after successful registration
                    // navigate('/login'); // Example redirect after registration
                } else {
                    // Login user
                    const response = await axios.post('http://localhost:5000/login', formData);
                    console.log(response.data.message);

                    // Redirect after successful login
                    // navigate('/'); // Redirect to /preamble after login
                }
            } catch (error) {
                console.error('Error during form submission:', error);
            }
        }
    };

    return (
            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                {/* <span className="rotate-bg"></span>~
                <span className="rotate-bg2"></span> */}

                <div className="form-box login">
                    <h2 className="title animation" style={{ '--i': 0, '--j': 21 }}>Admin Login</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required />
                            <label htmlFor="">Username</label>
                            <i className='bx bxs-user'></i>
                            {errors.username && <span className="error-message">{errors.username}</span>}
                        </div>

                        <div className="input-box animation" style={{ '--i': 2, '--j': 23 }}>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required />
                            <label htmlFor="">Password</label>
                            <i className='bx bxs-lock-alt'></i>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 }}>Login</button>
                        <div className="linkTxt animation" style={{ '--i': 5, '--j': 25 }}>
                            <p>Are you Invoicers ?<a href="#" className="register-link" onClick={handleRegisterClick}>Invoicer Login</a></p>
                        </div>
                    </form>
                </div>

                <div className="info-text login">
                    <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back!</h2>
                    <p className="animation" style={{ '--i': 1, '--j': 21 }}>Our Shop!</p>
                </div>

                <div className="form-box register">
                    <h2 className="title animation" style={{ '--i': 17, '--j': 0 }}>Invoicer Login</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required />
                            <label htmlFor="">User Name</label>
                            <i className='bx bxs-user'></i>
                            {errors.username && <span className="error-message">{errors.username}</span>}
                        </div>

                        <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
                        <input
                            type="text"
                            name="opreatorsName"
                            value={formData.opreatorsName}
                            onChange={handleInputChange}
                            required />
                            <label htmlFor="">Invoicer Name</label>
                        <i className='bx bxs-envelope'></i>
                        {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="input-box animation" style={{ '--i': 20, '--j': 3 }}>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required />
                            <label htmlFor="">Password</label>
                            <i className='bx bxs-lock-alt'></i>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <button type="submit" className="btn animation" style={{ '--i': 21, '--j': 4 }}>Login</button>

                        <div className="linkTxt animation" style={{ '--i': 22, '--j': 5 }}>
                            <p>Are you Admin ?<a href="#" className="login-link" onClick={handleLoginClick}>Admin Login</a></p>
                        </div>
                    </form>
                </div>

                <div className="info-text register">
                    <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome Back!</h2>
                    <p className="animation" style={{ '--i': 18, '--j': 1 }}>Invoicers!</p>
                </div>
            </div>
    );
}

export default LoginRegisterForm;
