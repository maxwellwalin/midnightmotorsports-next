import { integer, text, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { isSignedIn, permissions, rules } from "../access";

export const OrderItem = list({
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
      ref: "PartImage",
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
    order: relationship({ ref: 'Order.items' })
  },
});
