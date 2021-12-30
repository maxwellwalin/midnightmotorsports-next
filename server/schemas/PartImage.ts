import 'dotenv/config';
import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'midnight-motorsports',
};

export const PartImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    part: relationship({ 
      ref: 'Part.images' 
    }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'part'],
    },
  },
});
