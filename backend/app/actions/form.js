const { sendEmail } = require('../handler/nodemailer');
const { sendToVk } = require('../handler/vkSender');

const sendFormData = ({ user, tel }) => {
  const message = `
Имя: ${user.trim() || 'Не указано'};
Телефон: ${tel};

-----

${Date(Date.now())}
  `;

  sendEmail(message);
  sendToVk(message);
};

module.exports = {
  sendFormData,
};
