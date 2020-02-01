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
      title: 'Карусель',
      description: 'Картинки для карусели',
      name: 'carousel',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
