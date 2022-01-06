import { integer, text, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { isSignedIn, permissions, rules } from "../access";

export const Part = list({
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
    name: text({
      isRequired: true,
    }),
    description: text({
      ui: {
        displayMode: "textarea",
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
    images: relationship({
      ref: "PartImage.part",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
    price: integer({
      defaultValue: 0,
    }),
    quantity: integer({
      defaultValue: 0,
    }),
    categories: relationship({
      ref: "Category",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineConnect: true,
      },
    }),
    partNumber: text(),
    model: relationship({
      ref: "Model.parts",
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineConnect: true,
      },
    }),
  },
});
