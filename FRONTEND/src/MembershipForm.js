import React, { useState } from 'react';
import axios from './axiosConfig';
import './MembershipForm.css';


const MembershipForm = ({ membership }) => {
    const [formData, setFormData] = useState(membership || { name: '', description: '', price: '', duration_months: '' });
    const [paymentStatus, setPaymentStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Save the membership
            const membershipResponse = await axios.post('/memberships', formData);

            // Simulate payment processing
            const paymentResponse = await axios.post('/payments/mock-process', {
                amount: formData.price,
                userId: 'user-id', // Replace with actual user ID
                membershipId: membershipResponse.data.id
            });

            // Handle successful payment setup
            const { paymentConfirmation } = paymentResponse.data;
            setPaymentStatus('Payment successful. Confirmation: ' + paymentConfirmation);
        } catch (error) {
            console.error('Error saving membership or processing payment:', error);
            setPaymentStatus('Error saving membership or processing payment.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                required
            />
            <input
                type="number"
                name="duration_months"
                value={formData.duration_months}
                onChange={handleChange}
                placeholder="Duration (months)"
                required
            />
            <button type="submit">Save Membership</button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </form>
    );
};

export default MembershipForm;
