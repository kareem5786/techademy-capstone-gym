import React from 'react';
import Booking from './BookSlot';

const App = () => {
    const userId = 1; // Example user ID, replace with actual user ID from context or props

    return (
        <div>
            <Booking userId={userId} />
        </div>
    );
};

export default App;
