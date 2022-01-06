import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules } from '../access';

export const Make = list({
    access: {
        create: rules.canManageParts,
        read: () => true,
        update: rules.canManageParts,
        delete: rules.canManageParts,
    },
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
