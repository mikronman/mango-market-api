const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /email/send - Send email
const sendEmail = (request, response) => {
  const { name, email, message } = request.body;

  // Create a transporter object to send emails
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Define the email options
  const mailOptions = {
    from: email, // Using the user-entered email as the "from" field
    to: 'mkleczkajr@gmail.com', // Your designated email address
    subject: 'New Message from Website', // Subject of the email
    text: `Name: ${name}\n\nMessage: ${message}`, // Email content including name and message
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      response.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      response.json({ message: 'Email sent successfully' });
    }
  });
};

// Define the route
router.post('/send', sendEmail);

module.exports = router;
