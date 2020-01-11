require('dotenv').config();

module.exports.config = {
  port: process.env.PORT,
  /* Doesn't work for now
  sender: {
    email: 'YOUR_EMAIL',
    password: 'YOUR_PASSWORD',
  },
  */
  transporter: {
    service: 'YOUR_SERVICE',
    auth: {
      user: 'YOUR_EMAIL',
      pass: 'YOUR_PASSWORD',
    },
  },
  mailOptions: {
    from: 'PANTHEON - форма обратной связи',
    to: 'some@email.com, another@email.com',
    subject: 'Запрос звонка!',
    text: '...',
  },
};
