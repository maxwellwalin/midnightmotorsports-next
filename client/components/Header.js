import styled from "styled-components";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useUser } from "./User";
import SignOut from "./SignOut";
import Cart from "./Cart";

export default function Header() {
  const user = useUser();
  return (
    <HeaderStyles>
      <Div>
        <A
          href="https://www.instagram.com/949midnight.motorsports/"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: '2rem' }}
        >
          <SocialIcon
            icon={faInstagram}
          ></SocialIcon>
        </A>
        <A
          href="https://www.facebook.com/949midnight.motorsports"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon
            icon={faFacebook}
          ></SocialIcon>
        </A>
      </Div>
      <Link href="/about" shallow>
        <MidnightTitle>
          MIDNIGHT <span style={{display: 'block', marginLeft: '4rem'}}>MOTORSPORTS</span>
          </MidnightTitle>
      </Link>
      {user && (
        <SignOut A={A} />
      )}
      {!user && (
        <Link href="/login" shallow>
          <A>Login</A>
        </Link>
      )}
      <Cart />
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  display: grid;
  background: #0b132b;
  color: white;
  border-bottom: 1px solid #3A506B;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 1rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  align-self: center;
  transition: 400ms;

  &:hover {
    transition: 400ms;
    cursor: pointer;
    color: #6FFFE9;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  height: 2rem;
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
`

const MidnightLogo = styled.h1`
  max-width: 20%;
  max-height: 20%;
  font-style: italic;
  height: inherit;
  grid-column: 2;
  grid-row: 1;
  margin: 1rem 0;
  border-radius: 50%;



  @media (max-width: 650px) {
    margin: 0;
    height: 12rem;
    width: 12rem;
  }

  @media (max-width: 480px) {
    height: 10rem;
    width: 10rem;
  }
`;
