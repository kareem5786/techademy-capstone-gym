import React, { useState, useEffect } from 'react';
import axios from './axiosConfig'; // Ensure this path is correct
import './BookSlot.css'; // Optional

const Booking = () => {
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Fetch available slots from backend
        setLoading(true);
        axios.get('/slots') // Ensure this matches your backend route
            .then(response => {
                setSlots(response.data); // Assuming response.data is an array of slots
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching slots');
                setLoading(false);
                console.error('Error fetching slots', error);
            });
    }, []);

    const handleChange = (e) => {
        setSelectedSlot(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedSlot) {
            setError('Please select a slot');
            return;
        }
        setLoading(true);
        axios.post('/slots', { slotId: selectedSlot })
            .then(response => {
                setSuccessMessage(response.data.message); // Use message from response
                setSelectedSlot(''); // Clear selection
                setError('');
            })
            .catch(error => {
                setError(error.response?.data?.message || 'Error booking slot'); // Use message from response
                setSuccessMessage('');
                console.error('Error booking slot', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="booking-container">
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange} value={selectedSlot} required>
                    <option value="">Select a slot</option>
                    {slots.map(slot => (
                        <option key={slot.id} value={slot.id}>
                            {`${slot.date} ${slot.time}`} {/* Show date and time of the slot */}
                        </option>
                    ))}
                </select>
                <button type="submit" disabled={loading}>
                    {loading ? 'Booking...' : 'Book Slot'}
                </button>
            </form>
        </div>
    );
};

export default Booking;
