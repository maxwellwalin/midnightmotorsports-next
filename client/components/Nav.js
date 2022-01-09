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
      <button type="button" onClick={openCart}>
        My Cart
        <CartCount
          count={user?.cart.reduce(
            (tally, cartItem) => tally + cartItem.quantity,
            0
          )}
        />
      </button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 1.5rem;
  color: white;
  padding: 1rem 0;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  justify-items: center;
`;

const StyledLink = styled.div`
  text-decoration: none;
  color: white;

  &:hover {
    transition: 400ms;
    cursor: pointer;
    text-decoration: underline;
    color: #979aff;
  }

  &.active {
    color: #979aff;
    text-decoration: underline;
  }
`;

export const DisappearingDiv = styled.div`
  display: inline;
  align-self: center;
  justify-self: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

export default NavBar;
