import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

function NavBar() {
  const router = useRouter();
  
  return (
    <Nav>
      <StyledLink className={router.pathname == "/about" ? "active" : "about"}>
        <Link
          href="/about"
          shallow
        >
          <div>
            About <DisappearingDiv>Us</DisappearingDiv>
          </div>
        </Link>
      </StyledLink>
      <StyledLink className={router.pathname == "/brands" ? "active" : "about"}>
        <Link
          href="/brands"
          shallow
        >
          <div>
            Shop <DisappearingDiv>Products</DisappearingDiv>
          </div>
        </Link>
      </StyledLink>
      <StyledLink className={router.pathname == "/contact" ? "active" : "about"}>
        <Link
          href="/contact"
          shallow
        >
          <div>
            Contact <DisappearingDiv>Us</DisappearingDiv>
          </div>
        </Link>
      </StyledLink>
    </Nav>
  );
}
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`
export const StyledLink = styled.div`
  text-decoration: none;
  color: white;
  transition: 200ms;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 10rem;
  text-align: center;

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
    text-decoration: underline;
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

export default NavBar;






