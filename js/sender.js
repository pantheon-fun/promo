function sender(text) {
  let nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'send.company.bot@gmail.com',
      pass: 'javaservelet'
    }
  });

  let mailOptions = {
    from: 'send.company.bot@gmail.com',
    to: 'gabi.broun@gmail.com, dmirddz@gmail.com',
    subject: 'Sending Email using Node.js',
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = sender;