const router = require('express').Router();
const db = require('../db');

router.use('/contact', require('./contact'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
