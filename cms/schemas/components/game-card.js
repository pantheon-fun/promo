export default {
  title: 'Game card',
  name: 'gameCard',
  type: 'document',
  fields: [
    {
      title: 'Иконка',
      name: 'icon',
      type: 'reference',
      to: [{ type: 'picture' }],
    },
    {
      title: 'Название игры',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Описание',
      name: 'description',
      type: 'text',
    },
  ],
};
