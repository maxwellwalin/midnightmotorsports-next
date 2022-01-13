import styled from "styled-components";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { DisappearingDiv } from "./Nav";
import { SocialIcon } from "./Header";

export default function Footer() {
  return (
    <FooterStyles>
      <DisappearingDiv>
        <DivA href="https://www.instagram.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
          <SocialIcon icon={faInstagram}></SocialIcon>
        </DivA>
        <DivA href="https://www.facebook.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
          <SocialIcon icon={faFacebook}></SocialIcon>
        </DivA>
      </DisappearingDiv>
      <A href="https://www.google.com/maps/place/23211+Cherry+Ave,+Lake+Forest,+CA+92630/@33.6259613,-117.6915514,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce90036cce33b:0x967a743faaec8edc!8m2!3d33.6259613!4d-117.6893627" target="_blank" rel='noreferrer'>23211 Cherry Ave, Lake Forest, CA 92630</A>
      <A href="tel:9492733700">(949) 273-3700</A>
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 10rem;
  width: 100%;
  color: white;
  border-top: 1px solid hsla(0,0%,100%,.1);
list-style: none;
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

const A = styled.a`
  align-self: center;
  justify-self: center;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
`

const DivA = styled.a`
  margin: 0 1rem;

  &:hover {
    list-style: none;
    color: gray;
  }
`
