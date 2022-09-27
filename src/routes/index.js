const router = require('express').Router();

router.use('/contact-us', require('./contactus.js'));

module.exports = router;