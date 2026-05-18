const mongoose = require('mongoose');

const fingerprintSchema = mongoose.Schema(
  {
    caseId: {
      type: String,
      required: true,
    },
    suspectName: {
      type: String,
      required: true,
    },
    officer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Pending', 'Verified', 'Under Investigation', 'Closed'],
      default: 'Pending',
    },
    matchPercentage: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

const Fingerprint = mongoose.model('Fingerprint', fingerprintSchema);

module.exports = Fingerprint;
