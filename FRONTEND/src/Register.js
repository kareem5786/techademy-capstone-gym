import React, { useState, useEffect } from 'react';
import axios from './axiosConfig'; // Ensure this path is correct
import './Register.css'; // Import the CSS file

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        dob: '',
        address: '',
        role: 'user'
    });

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', formData);
            alert('Registration successful');
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            alert(`Registration failed: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    useEffect(() => {
        const slides = document.querySelector('.slides');
        let index = 0;

        const showNextSlide = () => {
            index = (index + 1) % 3; // Adjust this number based on the number of slides
            slides.style.transform = `translateX(-${index * 100}%)`;
        };

        const interval = setInterval(showNextSlide, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="register-page">
            <div className="slider">
                <div className="slides">
                    <div className="slide" style={{ backgroundImage: `url(${image1})` }}></div>
                    <div className="slide" style={{ backgroundImage: `url(${image2})` }}></div>
                    <div className="slide" style={{ backgroundImage: `url(${image3})` }}></div>
                </div>
            </div>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                    <input type="hidden" name="role" value={formData.role} />
                    <button type="submit">Register</button>
                </form>
                <div className="additional-info">
                    <h2>What You Get After Registration</h2>
                    <p>Thank you for registering! Here’s what you can look forward to:</p>
                    <ul>
                        <li>Access to exclusive content and features.</li>
                        <li>Personalized experience tailored to your interests.</li>
                        <li>Special offers and promotions.</li>
                        <li>Regular updates and news about our services.</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;
