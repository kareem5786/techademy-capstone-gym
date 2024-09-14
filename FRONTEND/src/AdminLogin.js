import React, { useState } from 'react';
import axios from './axiosConfig'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        setLoading(true);
        try {
            // Make the request to the login endpoint
            const response = await axios.post('/admin/login', { username, password });

            // Assuming the server returns a success message or token
            if (response.data.success) {
                // Store the token in localStorage
                localStorage.setItem('adminToken', response.data.token);

                // Redirect to Admin Dashboard
                navigate('/admin');
            } else {
                alert('Invalid credentials.');
            }
        } catch (error) {
            console.error('Error logging in:', error.response?.data?.error || error.message);
            alert('Failed to login: ' + (error.response?.data?.error || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h1>Admin Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </div>
    );
};

export default AdminLogin;
