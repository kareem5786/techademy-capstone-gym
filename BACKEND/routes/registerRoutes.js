const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../config/db'); // Ensure this path is correct

router.post('/', (req, res) => {
  const { username, email, password, dob, address } = req.body;

  if (!username || !email || !password || !dob || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    db.query('INSERT INTO users (username, email, password, dob, address) VALUES (?, ?, ?, ?, ?)', [username, email, hashedPassword, dob, address], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

module.exports = router;
