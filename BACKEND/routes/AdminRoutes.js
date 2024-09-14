// routes/AdminRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Delete a user
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err.message });
        }
        res.json({ message: 'User deleted successfully' });
    });
});

// Add a slot
router.post('/slots', (req, res) => {
    console.log('Request to add slot:', req.body);
    const { date, time, trainer_id } = req.body;
    if (!date || !time || !trainer_id) {
        return res.status(400).json({ message: 'Date, time, and trainer_id are required' });
    }
    db.query('INSERT INTO slots (date, time, trainer_id) VALUES (?, ?, ?)', [date, time, trainer_id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err.message });
        }
        res.json({ message: 'Slot added successfully' });
    });
});


// Add a trainer
router.post('/trainers', (req, res) => {
    const { trainer_id, name, specialty, bio, contact_info, availability } = req.body;
    if (!trainer_id || !name || !specialty || !bio || !contact_info || !availability) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    db.query(
        'INSERT INTO trainersnew (trainer_id, name, specialty, bio, contact_info, availability) VALUES (?, ?, ?, ?, ?, ?)',
        [trainer_id, name, specialty, bio, contact_info, availability],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err.message });
            }
            res.json({ message: 'Trainer added successfully' });
        }
    );
});


// Delete a trainer
router.delete('/trainers/:id', (req, res) => {
    const trainerId = req.params.id;
    db.query('DELETE FROM trainersnew WHERE trainer_id = ?', [trainerId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err.message });
        }
        res.json({ message: 'Trainer deleted successfully' });
    });
});

// Manage membership
router.post('/memberships', (req, res) => {
    const { name, description, price, duration_months } = req.body;
    db.query('INSERT INTO memberships (name, description, price, duration_months) VALUES (?, ?, ?, ?)', [name, description, price, duration_months], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err.message });
        }
        res.json({ message: 'Membership added successfully' });
    });
});

module.exports = router;
