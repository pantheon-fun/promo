require('dotenv').config();

module.exports.config = {
  port: process.env.PORT,
  sender: {
    direct: true,
    host: 'smtp.yandex.ru',
    port: 465,
    auth: {
      user: 'YOUR_EMAIL',
      pass: 'YOUR_PASS',
    },
    secure: true,
  },
  mailOptions: {
    from: 'YOUR_EMAIL',
    to: 'some@email.com, another@email.com',
    subject: 'Запрос звонка!',
    text: '...',
  },
  vkAdmins: ['YOUR_VK_ADMINS'],
  vkToken: 'YOUR_VK_TOKEN',
};
