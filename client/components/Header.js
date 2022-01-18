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
      <DisappearingDiv>
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
      </DisappearingDiv>
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

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
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

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`

const DisappearingDiv = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
