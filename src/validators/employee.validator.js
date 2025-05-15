const { param } = require('express-validator');

const getSubordinatesValidator = [
  param('id')
    .isInt().withMessage('ID must be an integer')
    .toInt()
];

module.exports = { getSubordinatesValidator };

// amranul bhai =>