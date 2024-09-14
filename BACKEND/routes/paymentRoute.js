// routes/paymentRoute.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Path to your db.js

// Define your routes
router.post('/update-payment-status', (req, res) => {
    const { paymentId, status } = req.body;

    if (!paymentId || !status) {
        return res.status(400).json({ error: 'Payment ID and status are required' });
    }

    const updateQuery = 'UPDATE payments SET status = ? WHERE id = ?';
    db.query(updateQuery, [status, paymentId], (err) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        res.json({ message: 'Payment status updated successfully' });
    });
});

module.exports = router;
