// routes/slotsRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Get available slots
router.get('/', (req, res) => {
    db.query('SELECT id, date, time FROM slots WHERE is_booked = 0', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});

// Book a slot
router.post('/', (req, res) => {
    const { slotId } = req.body;

    if (!slotId) {
        return res.status(400).json({ message: 'Slot ID is required' });
    }

    // Check if slot is already booked
    db.query('SELECT is_booked FROM slots WHERE id = ?', [slotId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Slot not found' });
        }
        if (results[0].is_booked) {
            return res.status(400).json({ message: 'Slot already booked' });
        }

        // Book the slot
        db.query('UPDATE slots SET is_booked = 1 WHERE id = ?', [slotId], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error' });
            }
            res.status(201).json({ message: 'Slot booked successfully' });
        });
    });
});

module.exports = router;
