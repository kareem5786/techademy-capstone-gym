import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Example function to check authentication
const isAuthenticated = () => {
    // Implement your authentication check logic here
    // For example, check if a token exists in localStorage
    return !!localStorage.getItem('adminToken');
};

const AdminRoute = ({ element, ...rest }) => {
    return (
        <Route
            {...rest}
            element={isAuthenticated() ? element : <Navigate to="/admin-login" />}
        />
    );
};

export default AdminRoute;
