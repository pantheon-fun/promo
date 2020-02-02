export default {
  title: 'First section',
  name: 'firstSection',
  type: 'document',
  fields: [
    {
      title: 'Заголовок',
      name: 'siteTitle',
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
      name: 'siteLogo',
      type: 'reference',
      to: [{ type: 'picture' }],
    },
    {
      title: 'Карусель',
      description: 'Картинки для карусели',
      name: 'carousel',
      type: 'array',
      of: [
        {
          title: 'Картинка карусели',
          type: 'reference',
          to: [{ type: 'picture' }],
        },
      ],
    },
  ],
};
