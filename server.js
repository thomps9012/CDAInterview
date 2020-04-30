const express = require("express");
const htmlRoutes = require("./htmlRoutes");
var app = express();
var PORT = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("files"));
app.use('/', htmlRoutes);



app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));

// POST route from contact form
app.post('/contact', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: GMAIL_USER,
      subject: 'New message from contact form at tylerkrys.ca',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.render('contact-failure') // Show a page indicating failure
      }
      else {
        res.render('contact-success') // Show a page indicating success
      }
    })
  })