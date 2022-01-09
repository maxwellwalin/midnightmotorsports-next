import 'dotenv/config';
import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Make } from './schemas/Make';
import { Model } from './schemas/Model';
import { Part } from './schemas/Part';
import { PartImage } from './schemas/PartImage';
import { Year } from './schemas/Year';
import { Category } from './schemas/Category';
import { MakeImage } from './schemas/MakeImage';
import { ModelImage } from './schemas/ModelImage';
import { CategoryImage } from './schemas/CategoryImage';
import { Role } from './schemas/Role';
import { permissionsList } from './schemas/fields';
import { CartItem } from './schemas/CartItem';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-midnight-motorsports-next';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30 * 360,
  secret: process.env.SESSION_SECRET
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // add inital roles
  },
});

export default withAuth(
  // @ts-ignore
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
    },
    lists: createSchema({
      User,
      Make,
      MakeImage,
      Model,
      ModelImage,
      Part,
      PartImage,
      Year,
      Category,
      CategoryImage,
      Role,
      CartItem,
    }),
    ui: {
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email role { ${permissionsList.join(' ')} }`,
    }),
  })
)