import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Model = list({
    fields: {
        name: text({ isRequired: true }),
        parts: relationship({
            ref: 'Part.model',
            many: true,
            ui: {
                displayMode: 'cards',
                cardFields: ['id', 'name'],
                inlineConnect: true
            }
        }),
        year: relationship({
            ref: 'Year',
            ui: {
                displayMode: 'cards',
                cardFields: ['beginningYear', 'endYear'],
                inlineCreate: { fields: ['beginningYear', 'endYear'] },
            }
        }),
    }
});
