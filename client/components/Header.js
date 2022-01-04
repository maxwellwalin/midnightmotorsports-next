import styled from "styled-components";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useUser } from "./User";

export default function Header() {
  const user = useUser();
  return (
    <HeaderStyles>
      <Div>
        <A
          href="https://www.instagram.com/949midnight.motorsports/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-2x"
            style={leftIconStyle}
          ></FontAwesomeIcon>
        </A>
        <A
          href="https://www.facebook.com/949midnight.motorsports"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="fa-2x"
          ></FontAwesomeIcon>
        </A>
      </Div>
      <A href="/about">
        <MidnightLogo
          src="https://res.cloudinary.com/dtpgzynwd/image/upload/v1641101298/midnight-motorsports/midnightlogo_ilxpls.png"
          alt="midnight motorsports black and white logo"
        />
      </A>
      {user && (
        <Link href="/logout" shallow>
          <A>Logout</A>
        </Link>
      )}
      {!user && (
        <Link href="/login" shallow>
          <A>Login</A>
        </Link>
      )}
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  display: grid;
  background: black;
  width: 100%;
  color: white;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

const Div = styled.div`
  align-self: center;
  justify-self: center;
`;
const A = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  align-self: center;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    text-decoration: underline;
    color: #979aff;
  }
`;

const MidnightLogo = styled.img`
  width: 15rem;
  height: inherit;
  grid-column: 2;
  grid-row: 1;
  margin: 1rem 0;

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

const leftIconStyle = {
  marginRight: "1rem",
};
