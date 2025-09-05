const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: function(email) {
        return email.endsWith('@aust.edu');
      },
      message: 'Email must be an AUST email (@aust.edu)'
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  bloodGroup: {
    type: String,
    required: [true, 'Blood group is required'],
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  yearPosition: {
    type: String,
    required: [true, 'Year/Position is required']
  },
  currentSemester: {
    type: String,
    required: [true, 'Current semester is required']
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['Male', 'Female', 'Other']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  universityIdPhoto: {
    type: String, // Will store file path
    required: [true, 'University ID photo is required']
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  lastDonation: {
    type: Date,
    default: null
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  rejectionReason: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Check if user can donate (120 days gap)
userSchema.methods.canDonate = function() {
  if (!this.lastDonation) return true;
  
  const daysSinceLastDonation = Math.floor(
    (Date.now() - this.lastDonation.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  return daysSinceLastDonation >= 120;
};

// Get next eligible donation date
userSchema.methods.getNextEligibleDate = function() {
  if (!this.lastDonation) return new Date();
  
  const nextDate = new Date(this.lastDonation);
  nextDate.setDate(nextDate.getDate() + 120);
  
  return nextDate;
};

module.exports = mongoose.model('User', userSchema);