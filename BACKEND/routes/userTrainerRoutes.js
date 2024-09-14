// routes/userTrainerRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Adjust path as needed

// POST /api/user-trainers
router.post('/', (req, res) => {
    const { userId, trainerId } = req.body;

    if (!userId || !trainerId) {
        return res.status(400).json({ message: 'User ID and Trainer ID are required' });
    }

    db.query('INSERT INTO user_trainers (user_id, trainer_id) VALUES (?, ?)', [userId, trainerId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(201).json({ message: 'Trainer assigned successfully' });
    });
});

module.exports = router;
