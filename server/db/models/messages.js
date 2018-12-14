const Sequelize = require('sequelize');

const db = require('../db');

const Message = db.define('message', {
  contactName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contactPhone: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  contactMessage: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
  },
});

module.exports = Message;
