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
            (tally, cartItem) => tally + cartItem.quantity,
            0
          )}
        />
      </CartIcon>
    </Nav>
  );
}

const Nav = styled.nav`
list-style: none;
background: darkgrey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 12px;
  color: black;
  padding: 20px;
  
  justify-items: center;

&:hover {
  padding:30px;
  transition: 500ms;
}

`
const StyledLink = styled.div`
  text-decoration: none;
  color: black;

  &:hover {
    font-size: 13px;

    transition: 400ms;
    cursor: pointer;
   
    color: white;
  }

  &.active {
    color: #979aff;
    
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

const CartIcon = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
`

export default NavBar;