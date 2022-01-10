/* eslint-disable */
import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { CartItem } from '../schemas/CartItem';
import { Session } from '../types';

import { CartItemCreateInput } from '../.keystone/schema-types';

async function addToCart(
  root: any,
  { partId }: { partId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('ADDING TO CART!');
  // See if user is signed in
  const sesh = context.session as Session;
  if (!sesh || !sesh.itemId) {
    throw new Error('You must be logged in to do this!');
  }
  // Query users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, part: { id: partId } },
    resolveFields: 'id,quantity'
  });

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(existingCartItem)
    console.log(
      `There are already ${existingCartItem.quantity}, increment by 1!`
    );
    // If the current item is in their cart
    // increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }
  // If it isnt, create a new cart item
  return await context.lists.CartItem.createOne({
    data: {
      part: { connect: { id: partId }},
      user: { connect: { id: sesh.itemId }},
    },
    resolveFields: false,
  })
}

export default addToCart;
