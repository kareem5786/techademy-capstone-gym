import React, { useState, useEffect } from 'react';
import axios from './axiosConfig'; // Ensure this path is correct
import './ManageSlots.css';

const Slot = () => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        axios.get('/slots')
            .then(response => {
                setSlots(response.data);
            })
            .catch(error => {
                console.error('Error fetching slots', error);
            });
    }, []);

    return (
        <div className="slot-container">
            <h2>Available Slots</h2>
            <ul>
                {slots.map(slot => (
                    <li key={slot.id}>
                        {slot.date} {slot.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Slot;
