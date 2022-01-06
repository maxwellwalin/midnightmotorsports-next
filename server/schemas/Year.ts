import { relationship, integer } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions, rules } from "../access";

export const Year = list({
  access: {
    create: rules.canManageParts,
    read: () => true,
    update: rules.canManageParts,
    delete: rules.canManageParts,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageParts(args),
    hideDelete: (args) => !permissions.canManageParts(args),
  },
  fields: {
    beginningYear: integer({ isRequired: true }),
    endYear: integer({ isRequired: true }),
  },
});
