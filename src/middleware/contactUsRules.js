const {body} = require('express-validator');

const contactUs = [
  body('fullname').isLength({min: 4}).withMessage('Fullname length minimal 4 character'),
  body('email').isEmail().withMessage('Email format invalid'),
  body('message').isLength({max: 255}).withMessage('Max text 255 character'),
];

module.exports = contactUs;