const router = require('express').Router();
const { Messages } = require('../db/models');
const sendEmail = require('./messages');

router.get('/', (req, res, next) => {
  Messages.findAll()
    .then(messages => {
      res.json(messages);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  const { contactName, contactPhone, contactMessage } = req.body;
  sendEmail(contactName, contactPhone, contactMessage)
    .then(data => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
