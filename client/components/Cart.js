import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import CartStyles from "./styles/CartStyles";
import Supreme from "./styles/Supreme";
import { useUser } from "./User";
import formatMoney from "../lib/formatMoney";
import calcTotalPrice from "../lib/calcTotalPrice";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid grey;
  display: grid;
  grid-template-columns: auto 1fr auto;
  color: black;
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
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  if (!me) return null;
  console.log(me);
  return (
    <CartStyles open={true}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <ul>
          {me.cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
        <footer style={{color: "black"}}>
            <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        </footer>
      </header>
    </CartStyles>
  );
}
