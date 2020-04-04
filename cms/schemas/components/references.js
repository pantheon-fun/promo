export default {
  title: 'References',
  name: 'references',
  type: 'document',
  fields: [
    {
      title: 'Адрес',
      description: 'Лаконичный адрес арены',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Ссылка на арену на Яндекс.карте',
      name: 'ymapLink',
      type: 'url',
    },
    {
      title: 'Телефон',
      description: 'Номер для приёма звонков в формате: +7 977 722 09 60',
      name: 'telNumber',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Ссылка на VK',
      name: 'vkLink',
      type: 'url',
    },
    {
      title: 'Ссылка на инсту',
      name: 'instLink',
      type: 'url',
    },
    {
      title: 'Ссылка на подробный маршрут',
      description: 'Потом будет заменена отдельной секцией',
      name: 'detailedRouteLink',
      type: 'url',
    },
    {
      title: 'Ссылка на непревозойденного, превосходного, самого лучшего разработчика',
      name: 'devLink',
      type: 'url',
    },
  ],
};
