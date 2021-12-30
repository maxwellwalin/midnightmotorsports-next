import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Category = list({
  fields: {
    name: text({ isRequired: true }),
  },
});
