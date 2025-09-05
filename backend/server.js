const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import models to test database connection
const User = require('./models/User');
const BloodRequest = require('./models/BloodRequest');

// Routes (we'll add these later)
app.get('/', (req, res) => {
  res.json({ message: 'AUST Blood Donor API is running!' });
});

// Test route to check database connection
app.get('/test-db', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const requestCount = await BloodRequest.countDocuments();
    
    res.json({ 
      message: 'Database connected successfully!',
      stats: {
        users: userCount,
        requests: requestCount
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Database connection error',
      error: error.message 
    });
  }
});

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aust-blood-donor')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});