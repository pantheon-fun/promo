export default {
  title: 'Games section',
  name: 'gamesSection',
  type: 'document',
  fields: [
    {
      title: 'Заголовок',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Карточки игр',
      name: 'gameCards',
      type: 'array',
      of: [{ type: 'gameCard' }],
    },
  ],
};
