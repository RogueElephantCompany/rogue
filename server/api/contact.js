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
  const { contactName, contactPhone, contactMessage } = req.body;
  Messages.create({ contactName, contactPhone, contactMessage })
    .then(data => {
      sendEmail(contactName, contactPhone, contactMessage, 'Created');
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
