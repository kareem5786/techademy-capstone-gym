import React, { useState } from 'react';
import axios from './axiosConfig'; // Ensure this path is correct
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
            await axios.post('/contact', formData);
            alert('Message sent successfully');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error.response ? error.response.data : error.message);
            alert(`Failed to send message: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-form-container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                
                <p><strong>Address:</strong> 123 Gym Street, Fit City, XY 12345</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> contact@yourgym.com</p>
            </div>
        </div>
    );
};

export default Contact;
