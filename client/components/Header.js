import styled from 'styled-components';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <HeaderStyles>
            <Div>
                <A href="https://www.instagram.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='fa-2x' style={leftIconStyle}></FontAwesomeIcon>
                </A>
                <A href="https://www.facebook.com/949midnight.motorsports" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='fa-2x'></FontAwesomeIcon>
                </A>
            </Div>
            <A href="/about"><MidnightLogo src='./images/midnightlogo.png' alt='midnight motorsports black and white logo' /></A>
            <A href="/login">
                Login
            </A>
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
    grid-template-rows: 1fr;
`

const Div = styled.div`
    align-self: center;
    justify-self: center;
`
const A = styled.a`
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
    align-self: center;

    &:hover {
        transition: 400ms;
        text-decoration: underline;
        color: #979aff;
    }
`

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
`

const leftIconStyle = {
    marginRight: '1rem',
}