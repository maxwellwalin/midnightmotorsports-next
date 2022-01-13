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
      <A href="/about">
        <MidnightLogo
          src="https://res.cloudinary.com/dtpgzynwd/image/upload/v1641101298/midnight-motorsports/midnightlogo_ilxpls.png"
          alt="midnight motorsports black and white logo"
        />
      </A>
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
  background: black;
  width: 100%;
  color: white;
  
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const A = styled.a`
  font-size: 17px;
  text-decoration: none;
  color: white;
  align-self: center;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    
    color: #979aff;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  width: 3rem;
  height: 3rem;
`

const MidnightLogo = styled.img`
  max-width: 20%;
  max-height: 20%;
  height: inherit;
  grid-column: 2;
  grid-row: 1;
  margin: 1rem 0;
  border-radius: 50%;

&:hover {
  box-shadow: 0px 0px 10px 4px white;
  transition: 500ms;
}
 

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
