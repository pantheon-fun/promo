export default {
  title: 'First section',
  name: 'first-section',
  type: 'document',
  fields: [
    {
      title: 'Заголовок',
      name: 'mainTitle',
      type: 'string',
    },
    {
      title: 'Плюшки',
      description: 'Три коротких пункта',
      name: 'hints',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Кнопка',
      description: 'Что ведет вниз к бронированию игры',
      name: 'mainReservationButton',
      type: 'string',
    },
    {
      title: 'Логотип',
      description: 'Логотип арены',
      name: 'mainLogo',
      type: 'image',
    },
    {
      title: 'Адрес',
      description: 'Лаконичный адрес арены',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Телефон',
      description: 'Номер для приёма звонков в формате: +7 977 722 09 60',
      name: 'telNumber',
      type: 'string',
    },
    {
      title: 'Карусель',
      description: 'Картинки для карусели',
      name: 'carousel',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
