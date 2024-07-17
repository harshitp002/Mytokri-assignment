const express = require('express');
const { body, validationResult } = require('express-validator');
const googleAdsService = require('../services/googleAdsService');

const router = express.Router();

router.post('/upload-conversion', [
  body('clickId').notEmpty().withMessage('Click ID is required'),
  body('conversionTime').isISO8601().withMessage('Invalid conversion time format')
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { clickId, conversionTime } = req.body;
    const result = await googleAdsService.uploadConversion(clickId, conversionTime);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;