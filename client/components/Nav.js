import styled from 'styled-components';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();

  return (
    <Nav>
      <A className={router.pathname == "/about" ? "active" : ""} href="/about">
        About Us
      </A>
      <A className={router.pathname == "/brands" ? "active" : ""} href="/brands">
        Shop Products
      </A>
      <A className={router.pathname == "/contact" ? "active" : ""} href="/contact">
        Contact Us
      </A>
    </Nav>
  )
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 1.5rem;
  color: white;
  padding: 1rem 0;
  border-bottom: 1px solid hsla(0,0%,100%,.1);
`

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
`

export default NavBar