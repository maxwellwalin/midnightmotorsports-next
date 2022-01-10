import Cart from "../components/Cart";

export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.part) return tally;
    return tally + cartItem.part.price * cartItem.quantity;
  }, 0);
}
