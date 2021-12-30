import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Model = list({
  fields: {
    name: text({ isRequired: true }),
    // models: relationship({
    //   ref: 'Part',
    //   many: true,
    // }),
  }
});
