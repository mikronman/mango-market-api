const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

const sendEmail = (request, response) => {
  const { name, email, message } = request.body;

  // Set SendGrid API Key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'mkleczkajr@gmail.com', // Your email where you want to receive emails
    from: 'mkleczkajr@gmail.com', // Your verified sender
    subject: 'New Message from a Mango Customer!',
    text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      response.json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      if (error.response && error.response.body && error.response.body.errors) {
        console.log(error.response.body.errors);
      }
      response.status(500).json({ error: 'Failed to send email' });
    });
};

router.post('/send', sendEmail);

module.exports = router;
