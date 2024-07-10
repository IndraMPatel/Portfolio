const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your HTML, CSS, and JS files)
app.use(express.static('public'));

// Contact form route
app.post('#', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mr.rider2908@gmail.com',
      pass: 'Indra@45'
    }
  });

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `New Contact Form Submission: ${subject}`,
    text: `You have a new message from ${name} (${email}, ${phone}).\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
