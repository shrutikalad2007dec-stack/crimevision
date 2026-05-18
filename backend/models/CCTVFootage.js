const mongoose = require('mongoose');

const cctvFootageSchema = mongoose.Schema(
  {
    caseId: {
      type: String,
      required: true,
    },
    cameraLocation: {
      type: String,
      required: true,
    },
    incidentTimestamp: {
      type: Date,
      required: true,
    },
    incidentDescription: {
      type: String,
      required: true,
    },
    officer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    videoUrl: {
      type: String,
      required: true,
    },
    aiSuspiciousIndicator: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['Pending', 'Verified', 'Under Investigation', 'Closed'],
      default: 'Pending',
    }
  },
  {
    timestamps: true,
  }
);

const CCTVFootage = mongoose.model('CCTVFootage', cctvFootageSchema);

module.exports = CCTVFootage;
