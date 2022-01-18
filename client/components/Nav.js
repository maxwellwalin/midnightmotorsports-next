import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../lib/CartState";
import CartCount from "./CartCount";
import { useUser } from "./User";
function NavBar() {
  const user = useUser();
  const router = useRouter();
  const { openCart } = useCart();
  return (
    <Nav>
      <StyledLink>
        <Link
          className={router.pathname == "/about" ? "active" : "about"}
          href="/about"
          shallow
        >
          <div>
            About <DisappearingDiv>Us</DisappearingDiv>
          </div>
        </Link>
      </StyledLink>
      <StyledLink>
        <Link
          className={router.pathname == "/brands" ? "active" : "about"}
          href="/brands"
          shallow
        >
          <div>
            Shop <DisappearingDiv>Products</DisappearingDiv>
          </div>
        </Link>
      </StyledLink>
      <StyledLink>
        <Link
          className={router.pathname == "/contact" ? "active" : "about"}
          href="/contact"
          shallow
        >
          <div>
            Contact <DisappearingDiv>Us</DisappearingDiv>
          </div>
        </Link>
      </StyledLink>
      <CartIcon type="button" onClick={openCart}>
        My Cart
        <CartCount
          count={user?.cart.reduce(
            (tally, cartItem) => tally + (cartItem.part ? cartItem.quantity : 0),
            0
          )}
        />
      </CartIcon>
    </Nav>
  );
}
const Nav = styled.nav`
  background-color: #1C2541;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 30%;
  border-bottom: 1px solid #3A506B;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    padding: 1rem 15%;
  }

  @media screen and (max-width: 700px) {
    padding: 1rem 5%;
  }

`
const StyledLink = styled.div`
  text-decoration: none;
  color: white;
  transition: 400ms;
  padding: 0.5rem 1rem;
  border: 1px solid #6FFFE9;
  &:hover {
    transition: 400ms;
    cursor: pointer;
    color: #6FFFE9;
    background-color: #0B132B;
    border: 1px solid #6FFFE9;
  }
  &.active {
    color: #6FFFE9;
  }
`;
export const DisappearingDiv = styled.div`
  display: inline;
  align-self: center;
  justify-self: center;
  @media screen and (max-width: 520px) {
    display: none;
  }
`;
const CartIcon = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
`
export default NavBar;






