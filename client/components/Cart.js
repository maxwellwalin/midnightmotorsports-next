import styled from "styled-components";
import CartStyles from "./styles/CartStyles";
import { useUser } from "./User";
import formatMoney from "../lib/formatMoney";
import calcTotalPrice from "../lib/calcTotalPrice";
import { useCart } from "../lib/cartState";
import CloseButton from "./styles/CloseButton";
import RemoveFromCart from "./RemoveFromCart";
import { Checkout } from "./Checkout";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #3a506bff;
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }) {
  const { part } = cartItem;
  if (!part) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={part.images[0].image.publicUrlTransformed}
        alt={part.name}
      />
      <div>
        <h3>{part.name}</h3>
        <p>
          {formatMoney(part.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(part.price)}
            each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <h3>{me.name}'s Cart</h3>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
