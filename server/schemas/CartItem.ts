import { integer, text, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const CartItem = list({
  // TODO: custom label in here
  ui: {
    listView: {
      initialColumns: ["part", "quantity", "user"],
    },
  },
  fields: {
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    part: relationship({ ref: "Part" }),
    user: relationship({ ref: "User.cart" }),
  },
});
