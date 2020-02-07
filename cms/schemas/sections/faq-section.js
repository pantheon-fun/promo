export default {
  title: 'Faq section',
  name: 'faqSection',
  type: 'document',
  fields: [
    {
      title: 'Заголовок',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Часто задаваемые вопросы',
      name: 'faq',
      type: 'array',
      of: [{ type: 'qa' }],
    },
  ],
};
