const Fingerprint = require('../models/Fingerprint');

// Upload a new fingerprint
const uploadFingerprint = async (req, res) => {
  try {
    const { uploadedBy, notes } = req.body;
    
    // Simulate an AI match score for dramatic effect
    const matchScore = Math.floor(Math.random() * 40) + 60; // 60% to 99% match
    const status = matchScore > 85 ? 'Matched' : 'Analyzing';

    const fingerprint = new Fingerprint({
      uploadedBy: uploadedBy || 'Unknown Officer',
      matchScore,
      status,
      notes
    });

    const savedFingerprint = await fingerprint.save();
    res.status(201).json(savedFingerprint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all fingerprints
const getFingerprints = async (req, res) => {
  try {
    const fingerprints = await Fingerprint.find({}).sort({ uploadDate: -1 });
    res.json(fingerprints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { uploadFingerprint, getFingerprints };
