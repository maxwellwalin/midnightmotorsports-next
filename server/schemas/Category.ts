import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { rules } from "../access";

export const Category = list({
  access: {
    create: rules.canManageParts,
    read: rules.canManageParts,
    update: rules.canManageParts,
    delete: rules.canManageParts,
  },
  fields: {
    name: text({ isRequired: true }),
    image: relationship({
      ref: "CategoryImage.category",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
  },
});
