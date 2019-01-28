'use strict';
const nodemailer = require('nodemailer');

const sendEmail = (email, phone, message, status /*orderId*/) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: `threefeetfullstack@gmail.com`,
      pass: `thr33f33t`,
    },
  });

  // setup email data with unicode symbols
  let created = {
    from: `The Website ${email}`, //'"ThreeFeetTeam" `threefeetfullstack@gmail.com', // sender address
    to: ['nick@fixiteddie.com'], //email, // list of receivers
    subject: 'Email from Website', //`Order #${orderId} - Purchased`, // Subject line
    text: `Email from ${email} \n ${phone} \n ${message}`, // plain text body
    // html: '<b>Hello world?</b>' // html body
  };

  const actions = {
    Created: created,
  };

  const action = actions[status];

  transporter.sendMail(action, (error, info) => {
    console.log(email, action);
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
};

module.exports = sendEmail;
