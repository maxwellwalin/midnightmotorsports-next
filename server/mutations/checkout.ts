import { CartItem } from '../schemas/CartItem';
import { User } from '../schemas/User';
import {
  CartItemCreateInput,
  OrderCreateInput,
} from '../.keystone/schema-types';

/* eslint-disable */
import { KeystoneContext, SessionStore } from '@keystone-next/types';
import stripeConfig from '../lib/stripe';

const graphql = String.raw;

interface Arguments {
  token: string
}


async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {
  // 1. Make sure they are signed in
  const userId = context.session.itemId;
  if(!userId) {
    throw new Error('Sorry! You must be signed in to create an order!')
  }
  // 1.5 Query the current user
  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
      id
      name
      email
      cart {
        id
        quantity
        part {
          name
          price
          description
          id
          image {
            id
            image {
              id
              publicUrlTransformed
            }
          }
        }
      }
    `
  });
  console.dir(user, { depth: null })
  // 2. calc the total price for their order
  const cartItems = user.cart.filter(cartItem => cartItem.part);
  const amount = cartItems.reduce(function(tally: number, cartItem: CartItemCreateInput) {
    return tally + cartItem.quantity * cartItem.part.price;
  }, 0);
  console.log(amount);

  const charge = await stripeConfig.paymentIntents.create({
      amount,
      currency: 'USD',
      confirm: true,
      payment_method: token,
  }).catch(err => {
      console.log(err);
      throw new Error(err.message);
  });
console.log(charge)

}

export default checkout;
