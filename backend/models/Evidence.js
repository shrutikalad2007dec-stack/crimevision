const mongoose = require('mongoose');

const evidenceSchema = mongoose.Schema(
  {
    caseId: {
      type: String,
      required: true,
    },
    evidenceType: {
      type: String,
      required: true,
    },
    weaponCategory: {
      type: String,
    },
    serialNumber: {
      type: String,
    },
    officer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    imageUrl: {
      type: String,
    },
    storageLocation: {
      type: String,
      required: true,
    },
    chainOfCustody: [
      {
        officerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        action: String,
        date: {
          type: Date,
          default: Date.now
        }
      }
    ],
    status: {
      type: String,
      enum: ['Pending', 'Verified', 'Under Investigation', 'Closed'],
      default: 'Pending',
    },
    qrCode: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Evidence = mongoose.model('Evidence', evidenceSchema);

module.exports = Evidence;
