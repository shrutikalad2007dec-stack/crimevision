const mongoose = require('mongoose');

const bloodSampleSchema = mongoose.Schema(
  {
    sampleId: {
      type: String,
      required: true,
      unique: true,
    },
    caseId: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    dnaStatus: {
      type: String,
      enum: ['Extracted', 'Pending', 'Matched'],
      default: 'Pending',
    },
    collectionDate: {
      type: Date,
      required: true,
    },
    evidenceCondition: {
      type: String,
      required: true,
    },
    storageLocation: {
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
    },
    verificationStatus: {
      type: String,
      enum: ['Pending', 'Verified', 'Under Investigation', 'Closed'],
      default: 'Pending',
    }
  },
  {
    timestamps: true,
  }
);

const BloodSample = mongoose.model('BloodSample', bloodSampleSchema);

module.exports = BloodSample;
