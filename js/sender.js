function sender(message) {
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'send.company.bot@gmail.com',
      pass: 'javaservelet'
    }
  });

  const mailOptions = {
    from: 'Pantheon - контактная форма',
    to: 'gabi.broun@gmail.com, dmirddz@gmail.com, corp.pantheon@yandex.ru, corp.pantheon@gmail.com',
    subject: 'Новый запрос звонка',
    text: message
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
