const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Adjust path as needed

// GET /api/trainers
router.get('/', (req, res) => {
    db.query('SELECT * FROM trainers', (err, results) => {
        if (err) {
            console.error('Database query error:', err); // Log error if any
            return res.status(500).json({ message: 'Database error' });
        }
        console.log('Database results:', results); // Log results for debugging
        res.json(results);
    });
});

router.post('/bookings', (req, res) => {
    const { trainerId } = req.body;
    if (!trainerId) {
        return res.status(400).json({ message: 'Trainer ID is required' });
    }

    // Process booking logic here (e.g., save to database)
    res.status(200).json({ message: 'Booking successful' });
});

module.exports = router;
