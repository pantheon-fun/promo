const sendFormData = ({ user, tel }) => {
  const message = `Имя: ${user}; \nНомер телефона: ${tel};`;
  console.log(message);
  //   sender(message);
  //   // res.type('text/plain');
  //   // res.json(req.body);
  //   res.status(201).send({
  //     message: 'Почта отправлена',
  //     status: 'ok',
  //   });
  // });
};

module.exports.form = {
  sendFormData,
};
