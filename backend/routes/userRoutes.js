// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const upload = require('../middleware/upload'); // You already have this file

// The route for user registration will be POST /api/users/register
// 1. 'upload.single()' is the middleware that looks for a file named 'universityIdPhoto' in the form data.
// 2. If it finds a file, it saves it to the 'uploads/' folder and attaches the file info to the 'req' object.
// 3. Then, it calls the 'registerUser' controller function.
router.post('/register', upload.single('universityIdPhoto'), registerUser);


module.exports = router;