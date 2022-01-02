import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Category = list({
  fields: {
    name: text({ isRequired: true }),
    image: relationship({
      ref: 'CategoryImage.category',
      ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText'] },
          inlineEdit: { fields: ['image', 'altText'] },
      },
  }),
  },
});
