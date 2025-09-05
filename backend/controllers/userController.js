// backend/controllers/userController.js

const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    // The form fields are in req.body
    const { 
      fullName, 
      email, 
      password, 
      bloodGroup, 
      department, 
      yearPosition,
      currentSemester,
      gender,
      address,
      phone
    } = req.body;

    // 1. Check if a user with that email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      // 400 means Bad Request
      return res.status(400).json({ success: false, message: 'User with this email already exists' });
    }

    // 2. Check if the ID photo was uploaded. Multer puts the file info in req.file.
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'University ID photo is required' });
    }
    // We will store the path to the file in the database
    const universityIdPhoto = req.file.path;

    // 3. Create a new user in memory
    // The password will be automatically hashed because of the 'pre-save' hook in your User.js model.
    const user = new User({
      fullName,
      email,
      password,
      bloodGroup,
      department,
      yearPosition,
      currentSemester,
      gender,
      address,
      phone,
      universityIdPhoto
    });
    
    // 4. Save the user to the database
    await user.save();

    // 5. Send a success response
    // 201 means 'Created'
    res.status(201).json({
      success: true,
      message: 'Registration successful! Your account is now pending admin approval.'
    });

  } catch (error) {
    console.error('Registration Error:', error);
    // 500 means Internal Server Error
    res.status(500).json({ success: false, message: 'Server error during registration' });
  }
};

module.exports = {
  registerUser,
};