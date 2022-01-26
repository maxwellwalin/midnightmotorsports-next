import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useUser } from "./User";
import SignOut from "./SignOut";
import NavBar from "./Nav";
import { useCart } from "../lib/cartState";
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
            MIDNIGHT <MidnightSpan>MOTORSPORTS</MidnightSpan>
          </MidnightTitle>
        </Link>
        <NavBar />
        <UserInfo>
          {user && (
            <SignOut A={LogButton} />
          )}
          {!user && (
            <StyledLink>
              <Link href="/login" shallow>
                <div>
                  Login
                </div>
              </Link>
            </StyledLink>
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
  position: fixed;
  width: 100%;
  background-color: #0B132B;
  display: grid;
  border-bottom: 1px solid #6FFFE9;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  padding: 1rem;
  min-height: 10.2vh;
  z-index: 100;

  /* @media screen and (max-width: 760px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  } */
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
  align-self: center;

  &:hover {
    transition: 400ms;
    color: #6FFFE9;
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`
const MidnightSpan = styled.span`
  display: block;
  margin-left: 2em;
`

const CartIcon = styled.span`
`

const UserInfo = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  align-self: center;
  justify-items: center;
  justify-self: center;
`

const StyledLink = styled.div`
  text-decoration: none;
  color: white;
  transition: 200ms;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 10rem;
  margin-right: 3rem;
  text-align: center;

  &:hover {
    transition: 400ms;
    cursor: pointer;
    color: #6FFFE9;
    background-color: #0B132B;
    border: 1px solid #6FFFE9;
    border-radius: 10rem;
  }
`;

const LogButton = styled.button`
  background-color: transparent;
  color: white;
  transition: 200ms;
  padding: 0.5em 1em;
  margin-right: 3rem;
  border: 1px solid transparent;
  border-radius: 10rem;
  width: fit-content;
  height: fit-content;

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

  a {
    color: white;
    &:hover {
      color: white;
    }
  }
`;

const DisappearingDiv = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
