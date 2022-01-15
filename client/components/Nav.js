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
list-style: none;
background: #292929;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 12px;
  color: #DBE7FF;
  padding: 20px;
  border-bottom:2px solid cyan;
  justify-items: center;



`
const StyledLink = styled.div`
  text-decoration: none;
  color: white;

  &:hover {
  
border-bottom: 1px solid cyan;
    transition: 500ms;
    cursor: pointer;
   
    color: cyan;
  }

  &.active {
    color: cyan;
    
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