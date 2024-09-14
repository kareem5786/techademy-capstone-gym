import React, { useState, useEffect } from 'react';
import axios from './axiosConfig'; // Adjust path according to your project

const TrainerList = () => {
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch the list of trainers from the backend
        axios.get('/api/trainers')
            .then(response => {
                setTrainers(response.data);
            })
            .catch(error => {
                setError('Error fetching trainers');
                console.error('Error fetching trainers', error);
            });
    }, []);

    const handleChange = (e) => {
        setSelectedTrainer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedTrainer) {
            alert('Please select a trainer');
            return;
        }

        // Handle form submission
        // Send the selected trainer ID to your backend or handle it according to your needs
        axios.post('/bookings', { trainerId: selectedTrainer })
            .then(_response => {
                alert('Trainer selected successfully');
                setSelectedTrainer(''); // Clear selection
            })
            .catch(error => {
                setError('Error selecting trainer');
                console.error('Error selecting trainer', error);
            });
    };

    return (
        <div className="trainer-list-container">
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange} value={selectedTrainer} required>
                    <option value="">Select a trainer</option>
                    {trainers.map(trainer => (
                        <option key={trainer.id} value={trainer.id}>
                            {trainer.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Select Trainer</button>
            </form>
            <div className="trainer-details">
                {trainers.map(trainer => (
                    <div key={trainer.id} className="trainer-card">
                        <img src={trainer.image_url} alt={trainer.name} />
                        <h3>{trainer.name}</h3>
                        <p>Skills: {trainer.skills}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainerList;
