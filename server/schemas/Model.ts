import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions, rules } from "../access";

export const Model = list({
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
    name: text({ isRequired: true }),
    parts: relationship({
      ref: "Part.model",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["id", "name"],
        inlineConnect: true,
      },
    }),
    images: relationship({
      ref: "ModelImage.model",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["name", "image", "altText"],
        inlineCreate: { fields: ["name", "image", "altText"] },
        inlineEdit: { fields: ["name", "image", "altText"] },
      },
    }),
    year: relationship({
      ref: "Year",
      ui: {
        displayMode: "cards",
        cardFields: ["beginningYear", "endYear"],
        inlineCreate: { fields: ["beginningYear", "endYear"] },
      },
    }),
  },
});
