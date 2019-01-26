const router = require('express').Router();
const sendEmail = require('./messages');

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
