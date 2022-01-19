import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useUser } from "./User";
import SignOut from "./SignOut";
import NavBar from "./Nav";
import { useCart } from "../lib/CartState";
import CartCount from "./CartCount";
import Cart from "./Cart";

export default function Header() {
  const user = useUser();
  const { openCart } = useCart();

  return (
    <>
      <HeaderStyles>
        <Link href="/about" shallow>
          <MidnightTitle>
            MIDNIGHT <span style={{ display: 'block', marginLeft: '4rem' }}>MOTORSPORTS</span>
          </MidnightTitle>
        </Link>
        <NavBar />
        <UserInfo>
          {user && (
            <SignOut A={LogButton} />
          )}
          {!user && (
            <Link href="/login" shallow>
              <LogButton>Login</LogButton>
            </Link>
          )}
          <CartIcon type="button" onClick={openCart}>
            My Cart
            <CartCount
              count={user?.cart.reduce(
                (tally, cartItem) => tally + (cartItem.part ? cartItem.quantity : 0),
                0
              )}
            />
          </CartIcon>
        </UserInfo>
      </HeaderStyles>
      <Cart />
    </>
  );
}

const HeaderStyles = styled.header`
  display: grid;
  border-bottom: 1px solid #3A506B;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 1rem;
  min-height: 10.6vh;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  min-height: 2rem;
`

const MidnightTitle = styled.h1`
  font-style: italic;
  font-weight: bolder;
  transition: 400ms;
  margin: 0;

  &:hover {
    transition: 400ms;
    color: #6FFFE9;
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`


const CartIcon = styled.span`
`

const UserInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`

const LogButton = styled.button`
  background-color: transparent;
  color: white;
  transition: 200ms;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 10rem;
  width: fit-content;

  &:hover {
    transition: 400ms;
    cursor: pointer;
    color: #6FFFE9;
    background-color: #0B132B;
    border: 1px solid #6FFFE9;
    border-radius: 10rem;
  }

  &.active {
    color: #6FFFE9;
  }
`;

const DisappearingDiv = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
