const express = require('express');
const router = express.Router();

// already in '/me'
router.get('/', (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
