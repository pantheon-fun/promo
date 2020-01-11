const { sendEmail } = require('../handler/nodemailer').nodemailer;

const sendFormData = ({ user, tel }) => {
  const message = `Имя: ${user.trim() || 'Не указано'}; \nНомер телефона: ${tel};`;

  sendEmail(message);
};

module.exports.form = {
  sendFormData,
};
