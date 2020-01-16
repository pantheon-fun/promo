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
    text: null,
  },
  vkAdmins: ['YOUR_VK_ADMINS'],
  vkToken: 'YOUR_VK_TOKEN',
};


module.exports.config = {
  development: {
    port: process.env.PORT || 3000,
    sender: {
      direct: true,
      host: 'smtp.yandex.ru',
      port: 465,
      auth: {
        user: 'SENDER_EMAIL',
        pass: 'SENDER_PASS',
      },
      secure: true,
    },
    mailOptions: {
      from: 'SENDER_EMAIL',
      to: `DEVELOPER_EMAIL`,
      subject: 'Запрос звонка!',
      text: null,
    },
    vkAdmins: [
      'DEVELOPER_VK_ID',
    ],
    vkToken: 'VK_TOKEN',
  },
  production: {
    port: process.env.PORT || 3000,
    sender: {
      direct: true,
      host: 'smtp.yandex.ru',
      port: 465,
      auth: {
        user: 'SENDER_EMAIL',
        pass: 'SENDER_PASS',
      },
      secure: true,
    },
    mailOptions: {
      from: 'SENDER_EMAIL',
      to: `
        SITE_OWNER_EMAILS
      `,
      subject: 'Запрос звонка!',
      text: null,
    },
    vkAdmins: [
      SITE_OWNER_VK_IDS
    ],
    vkToken: 'VK_TOKEN',
  }
}[process.env.NODE_ENV || 'production'];
