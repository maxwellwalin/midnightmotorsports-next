import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Make = list({
    fields: {
        name: text({ isRequired: true }),
        models: relationship({
            ref: 'Model',
            many: true,
        }),
    }
});
