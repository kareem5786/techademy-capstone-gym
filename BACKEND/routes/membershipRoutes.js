const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Ensure this path is correct

// Get all memberships
router.get('/', (req, res) => {
    db.query('SELECT * FROM memberships', (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        res.json(results);
    });
});

// Get a single membership by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM memberships WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        if (results.length === 0) return res.status(404).json({ message: 'Membership not found' });
        res.json(results[0]);
    });
});

// Create a new membership
router.post('/', (req, res) => {
    const { name, description, price, duration_months } = req.body;
    if (!name || !price || !duration_months) {
        return res.status(400).json({ message: 'Name, price, and duration are required' });
    }
    db.query('INSERT INTO memberships (name, description, price, duration_months) VALUES (?, ?, ?, ?)', 
        [name, description, price, duration_months], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(201).json({ id: results.insertId, message: 'Membership created successfully' });
        }
    );
});

// Update a membership
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, duration_months } = req.body;
    db.query('UPDATE memberships SET name = ?, description = ?, price = ?, duration_months = ? WHERE id = ?', 
        [name, description, price, duration_months, id], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            if (results.affectedRows === 0) return res.status(404).json({ message: 'Membership not found' });
            res.json({ message: 'Membership updated successfully' });
        }
    );
});

// Delete a membership
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM memberships WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Membership not found' });
        res.json({ message: 'Membership deleted successfully' });
    });
});

module.exports = router;
