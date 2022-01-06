import { relationship, integer } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules } from '../access';

export const Year = list({
  access: {
    create: rules.canManageParts,
    read: rules.canManageParts,
    update: rules.canManageParts,
    delete: rules.canManageParts,
},
  fields: {
    beginningYear: integer({ isRequired: true }),
    endYear: integer({ isRequired: true }),
  }
});
