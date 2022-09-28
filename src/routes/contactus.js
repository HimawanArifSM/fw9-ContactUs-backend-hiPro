const contactus=require('express').Router();

const rules = require('../middleware/contactUsRules')

const contactUs = require('../controllers/contactUs')

const validation = require('../middleware/validation')

contactus.get('/', contactUs.getContactUs);
contactus.post('/', ...rules, validation, contactUs.createContactUs);
contactus.get('/:id', contactUs.getDetailContactUs);
contactus.patch('/:id', ...rules, validation, contactUs.editContactUs);
contactus.delete('/:id', contactUs.deleteContactUs);

module.exports= contactus;