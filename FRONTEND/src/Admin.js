import React, { useState } from 'react';
import axios from './axiosConfig'; // Ensure this path is correct
import './Admin.css';

const Admin = () => {
    const [userId, setUserId] = useState('');
    const [slot, setSlot] = useState({ date: '', time: '', trainer_id: '' });
    const [trainer, setTrainer] = useState({ trainer_id: '', name: '', specialty: '', bio: '', contact_info: '', availability: '' });
    const [membership, setMembership] = useState({ name: '', description: '', price: '', duration_months: '' });
    const [selectedTrainerId, setSelectedTrainerId] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDeleteUser = async () => {
        if (!userId) {
            alert('Please enter a User ID.');
            return;
        }
        try {
            const response = await axios.delete(`/admin/users/${userId}`); // Ensure this matches your backend route
            alert(response.data.message);
        } catch (error) {
            console.error('Error deleting user:', error.response?.data?.error || error.message);
            alert('Failed to delete user: ' + (error.response?.data?.error || error.message));
        }
    };

    const handleAddSlot = async () => {
        if (!slot.date || !slot.time || !slot.trainer_id) {
            alert('Please fill out all fields.');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('/admin/slots', slot); // Note the URL should match your backend route
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding slot:', error.response?.data?.error || error.message);
            alert('Failed to add slot: ' + (error.response?.data?.error || error.message));
        } finally {
            setLoading(false);
        }
    };
    
    const handleAddTrainer = async () => {
        if (!trainer.trainer_id || !trainer.name || !trainer.specialty) {
            alert('Please fill out all fields.');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('/admin/trainers', trainer); // Ensure this matches your backend route
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding trainer:', error.response?.data?.error || error.message);
            alert('Failed to add trainer: ' + (error.response?.data?.error || error.message));
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteTrainer = async () => {
        if (!selectedTrainerId) {
            alert('Please enter a Trainer ID.');
            return;
        }
        try {
            const response = await axios.delete(`/admin/trainers/${selectedTrainerId}`); // Ensure this matches your backend route
            alert(response.data.message);
        } catch (error) {
            console.error('Error deleting trainer:', error.response?.data?.error || error.message);
            alert('Failed to delete trainer: ' + (error.response?.data?.error || error.message));
        }
    };

    const handleAddMembership = async () => {
        if (!membership.name || !membership.description || !membership.price || !membership.duration_months) {
            alert('Please fill out all fields.');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('/admin/memberships', membership); // Ensure this matches your backend route
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding membership:', error.response?.data?.error || error.message);
            alert('Failed to add membership: ' + (error.response?.data?.error || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>

            <section>
                <h2>Delete User</h2>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <button onClick={handleDeleteUser}>Delete User</button>
            </section>

            <section>
                <h2>Add Slot</h2>
                <input
                    type="date"
                    placeholder="Date"
                    value={slot.date}
                    onChange={(e) => setSlot({ ...slot, date: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Time"
                    value={slot.time}
                    onChange={(e) => setSlot({ ...slot, time: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Trainer ID"
                    value={slot.trainer_id}
                    onChange={(e) => setSlot({ ...slot, trainer_id: e.target.value })}
                />
                <button onClick={handleAddSlot} disabled={loading}>
                    {loading ? 'Adding Slot...' : 'Add Slot'}
                </button>
            </section>

            <section>
                <h2>Add Trainer</h2>
                <input
                    type="text"
                    placeholder="Trainer ID"
                    value={trainer.trainer_id}
                    onChange={(e) => setTrainer({ ...trainer, trainer_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Trainer Name"
                    value={trainer.name}
                    onChange={(e) => setTrainer({ ...trainer, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Specialty"
                    value={trainer.specialty}
                    onChange={(e) => setTrainer({ ...trainer, specialty: e.target.value })}
                />
                <textarea
                    placeholder="Bio"
                    value={trainer.bio}
                    onChange={(e) => setTrainer({ ...trainer, bio: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Contact Info"
                    value={trainer.contact_info}
                    onChange={(e) => setTrainer({ ...trainer, contact_info: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Availability"
                    value={trainer.availability}
                    onChange={(e) => setTrainer({ ...trainer, availability: e.target.value })}
                />
                <button onClick={handleAddTrainer} disabled={loading}>
                    {loading ? 'Adding Trainer...' : 'Add Trainer'}
                </button>
            </section>

            <section>
                <h2>Delete Trainer</h2>
                <input
                    type="text"
                    placeholder="Trainer ID"
                    value={selectedTrainerId}
                    onChange={(e) => setSelectedTrainerId(e.target.value)}
                />
                <button onClick={handleDeleteTrainer}>Delete Trainer</button>
            </section>

            <section>
                <h2>Add Membership</h2>
                <input
                    type="text"
                    placeholder="Membership Name"
                    value={membership.name}
                    onChange={(e) => setMembership({ ...membership, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={membership.description}
                    onChange={(e) => setMembership({ ...membership, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={membership.price}
                    onChange={(e) => setMembership({ ...membership, price: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Duration (months)"
                    value={membership.duration_months}
                    onChange={(e) => setMembership({ ...membership, duration_months: e.target.value })}
                />
                <button onClick={handleAddMembership} disabled={loading}>
                    {loading ? 'Adding Membership...' : 'Add Membership'}
                </button>
            </section>
        </div>
    );
};

export default Admin;
