const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const jwt = require('jsonwebtoken'); // For token-based authentication



const app = express();
app.use(cors());
app.use(bodyParser.json());


const secretKey = 'asdfghjkl'; // Replace with a secure key for token signing




// Endpoint to handle admin login
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;

    // Replace with your actual authentication logic
    if (username === 'admin' && password === 'password') {
        // Generate a token
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
});

// Middleware to verify token
app.use((req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Unauthorized' });
            }
            req.user = decoded;
            next();
        });
    } else {
        next();
    }
});

// Example protected route
app.get('/admin/protected', (req, res) => {
    if (req.user) {
        res.json({ message: 'Protected data', user: req.user });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Routes
app.use('/api/register', require('./routes/registerRoutes'));
app.use('/api/login', require('./routes/loginRoutes'));
app.use('/api/bookings', require('./routes/slotsRoutes'));
app.use('/api/trainers', require('./routes/trainerRoutes'));
app.use('/api/user-trainers', require('./routes/userTrainerRoutes'));
app.use('/api/memberships', require('./routes/membershipRoutes'));
app.use('/api/payments',require('./routes/paymentRoute') );
 app.use('/api/admin' , require('./routes/AdminRoutes'));




app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});



app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});



