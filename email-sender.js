var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Tryagain@gmail.com',
        pass: 'AssHole!'
    }
});

// setup email data with unicode symbols
let mailOptions = {
  from: 'Tryagain@gmail.com', // sender address
  to: 'wateryYanch@gmail.com', // list of receivers
  subject: 'Hello from Node.js!', // Subject line
  text: 'Hello world!', // plain text body
  html: '<b>Hello world!</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});