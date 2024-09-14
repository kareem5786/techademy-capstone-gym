// Example usage in a parent component
import React from 'react';
import TrainerList from './TL'; // Ensure the casing matches the filename


const UserDashboard = () => {
    const userId = 1; // Replace with actual user ID from context or state

    return (
        <div>
            <h1>Welcome to Your Dashboard</h1>
            <TrainerList userId={userId} />
        </div>
    );
};

export default UserDashboard;
