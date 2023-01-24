const express = require('express');
const { sendEmail } = require('./controllers/email');

const router = express();

router.get('/send-email', sendEmail);

module.exports = router;