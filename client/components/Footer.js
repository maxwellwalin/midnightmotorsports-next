import styled from "styled-components";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { DisappearingDiv } from "./Nav";
import { SocialIcon } from "./Header";

export default function Footer() {
  return (
    <FooterStyles>
      <DisappearingDiv>
        <SocialA href="https://www.instagram.com/949midnight.motorsports/" target="_blank" rel="noreferrer" style={{ marginRight: '2rem' }}>
          <SocialIcon icon={faInstagram}></SocialIcon>
        </SocialA>
        <SocialA href="https://www.facebook.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
          <SocialIcon icon={faFacebook}></SocialIcon>
        </SocialA>
      </DisappearingDiv>
      <StyledLink>
        <A href="https://www.google.com/maps/place/23211+Cherry+Ave,+Lake+Forest,+CA+92630/@33.6259613,-117.6915514,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce90036cce33b:0x967a743faaec8edc!8m2!3d33.6259613!4d-117.6893627" target="_blank" rel='noreferrer'>23211 Cherry Ave, Lake Forest, CA 92630</A>
      </StyledLink>
      <StyledLink>
        <A href="tel:9492733700">(949) 273-3700</A>
      </StyledLink>
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  background-color: #1C2541;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
  border-top: 1px solid #3A506B;
  justify-items: center;
  min-height: 4.2vh;
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

const StyledLink = styled.div`
  text-decoration: none;
  color: white;
  transition: 400ms;
  padding: 0.5rem 1rem;

  &:hover {
    transition: 400ms;
    cursor: pointer;
    color: #6FFFE9;
  }

  &.active {
    color: #6FFFE9;
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
    border-bottom: 1px solid #6FFFE9;
  }
`;

const SocialA = styled.a`
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