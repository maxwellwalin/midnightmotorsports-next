import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Make = list({
    fields: {
        name: text({ isRequired: true }),
        image: relationship({
            ref: 'MakeImage.make',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            },
        }),
        models: relationship({
            ref: 'Model',
            many: true,
        }),
    }
});
