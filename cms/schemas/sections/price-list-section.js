export default {
  name: 'priceListSection',
  title: 'Price list section',
  type: 'document',
  fields: [
    {
      name: 'priceTable_weekdays',
      title: 'Таблица цен за будни',
      type: 'table',
    },
    {
      name: 'priceTable_weekends',
      title: 'Таблица цен за выходные',
      type: 'table',
    },
  ],
};
