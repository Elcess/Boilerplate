const express = require('express');
const router = express.Router();

// already in '/logout'
router.delete('/', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(204);
});

module.exports = router;
