import "dotenv/config";
import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { permissions, rules } from "../access";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "midnight-motorsports",
};

export const MakeImage = list({
  access: {
    create: rules.canManageParts,
    read: () => true,
    update: rules.canManageParts,
    delete: rules.canManageParts,
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "Source",
    }),
    altText: text(),
    make: relationship({
      ref: "Make.image",
    }),
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageParts(args),
    hideDelete: (args) => !permissions.canManageParts(args),
    listView: {
      initialColumns: ["image", "altText", "make"],
    },
  },
});
