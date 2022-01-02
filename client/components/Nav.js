import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

function NavBar() {
  const router = useRouter();

  return (
    <Nav>
      <Link href="/about" shallow>
        <A className={router.pathname == "/about" ? "active" : "about"}>
          About <DisappearingDiv>Us</DisappearingDiv>
        </A>
      </Link>
      <Link href="/brands" shallow>
        <A className={router.pathname == "/brands" ? "active" : "brands"}>
          Shop <DisappearingDiv>Products</DisappearingDiv>
        </A>
      </Link>
      <Link href="/contact" shallow>
        <A
          className={router.pathname == "/contact" ? "active" : "contact"}
        >
          Contact <DisappearingDiv>Us</DisappearingDiv>
        </A>
      </Link>
      <Link href="/sell" shallow>
        <A
          className={router.pathname == "/sell" ? "active" : "sell"}
        >
          Sell <DisappearingDiv>Products</DisappearingDiv>
        </A>
      </Link>
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
`;

const A = styled.a`
  text-align: center;
  text-decoration: none;
  color: white;
  margin: auto;

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
