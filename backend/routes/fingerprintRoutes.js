const express = require('express');
const { uploadFingerprint, getFingerprints } = require('../controllers/fingerprintController');
const router = express.Router();

router.route('/').post(uploadFingerprint).get(getFingerprints);

module.exports = router;
