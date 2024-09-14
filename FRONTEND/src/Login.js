import React, { useState } from 'react';
import axios from './axiosConfig'; // Ensure this path is correct
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/login', credentials)
            .then(response => {
                // handle successful login
                alert('Login successful');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>User Login</h1>
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password" 
                    required 
                />
                <button type="submit">Login</button>
                <div className="additional-info">
                    <p>Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
