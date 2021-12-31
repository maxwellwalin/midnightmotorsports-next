import styled from 'styled-components';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <HeaderStyles>
            <Div />
            <A href="/about"><MidnightLogo src='./images/midnightlogo.png' alt='midnight motorsports black and white logo' /></A>
            <Div>
                <A href="https://www.instagram.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </A>
                <A href="https://www.facebook.com/949midnight.motorsports" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </A>
                <A href="/login">
                    Login
                </A>
            </Div>
        </HeaderStyles>
    )
}

const HeaderStyles = styled.header`
    display: grid;
    background: black;
    width: 100%;
    color: white;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
    grid-template-columns: 1fr 1fr 1fr;
`

const Div = styled.div`
    margin: auto;
`
const A = styled.a`
    font-size: 2rem;
    text-align: center;
    text-decoration: none;
    color: white;
    margin: 0 1rem;

    &:hover {
        transition: 400ms;
        text-decoration: underline;
        color: #979aff;
    }
`

const MidnightLogo = styled.img`
    width: 10vw;
    height: inherit;
    grid-column-start: 2;
    grid-column-end: 3;
    margin: 1rem 0;
`