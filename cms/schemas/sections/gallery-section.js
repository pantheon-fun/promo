export default {
  title: 'Gallery section',
  name: 'gallerySection',
  type: 'document',
  fields: [
    {
      title: 'Заголовок',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Картинки галереи',
      description: '8 штук',
      name: 'galleryImages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'picture' }],
        },
      ],
    },
    {
      title: 'Кнопка',
      description: 'Ведет к альбомам',
      name: 'albumBtn',
      type: 'link',
    },
  ],
};
