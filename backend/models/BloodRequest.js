const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bloodGroup: {
    type: String,
    required: [true, 'Blood group is required'],
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  bagsNeeded: {
    type: Number,
    required: [true, 'Number of bags is required'],
    min: [1, 'At least 1 bag is required'],
    max: [10, 'Maximum 10 bags allowed']
  },
  hospitalLocation: {
    type: String,
    required: [true, 'Hospital/Location is required']
  },
  message: {
    type: String,
    maxlength: [500, 'Message cannot exceed 500 characters']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isUrgent: {
    type: Boolean,
    default: false
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  expiresAt: {
    type: Date,
    default: function() {
      // Default: expires after 24 hours
      return new Date(Date.now() + 24 * 60 * 60 * 1000);
    }
  },
  repostedAt: {
    type: Date,
    default: null
  },
  responses: [{
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    responseType: {
      type: String,
      enum: ['available', 'can_arrange'],
      required: true
    },
    message: {
      type: String,
      maxlength: 200
    },
    isAccepted: {
      type: Boolean,
      default: false
    },
    respondedAt: {
      type: Date,
      default: Date.now
    }
  }],
  acceptedDonors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

// Index for better query performance
bloodRequestSchema.index({ bloodGroup: 1, isActive: 1 });
bloodRequestSchema.index({ requester: 1 });
bloodRequestSchema.index({ expiresAt: 1 });

// Check if request can be reposted (after 36 hours with no response)
bloodRequestSchema.methods.canRepost = function() {
  if (this.responses.length > 0) return false;
  
  const hoursOld = (Date.now() - this.createdAt.getTime()) / (1000 * 60 * 60);
  return hoursOld >= 36;
};

// Get remaining bags needed
bloodRequestSchema.methods.getRemainingBags = function() {
  return this.bagsNeeded - this.acceptedDonors.length;
};

// Check if request is fulfilled
bloodRequestSchema.methods.isFulfilled = function() {
  return this.acceptedDonors.length >= this.bagsNeeded;
};

// Auto-expire old requests
bloodRequestSchema.pre('find', function() {
  this.where({ expiresAt: { $gt: new Date() } });
});

bloodRequestSchema.pre('findOne', function() {
  this.where({ expiresAt: { $gt: new Date() } });
});

module.exports = mongoose.model('BloodRequest', bloodRequestSchema);