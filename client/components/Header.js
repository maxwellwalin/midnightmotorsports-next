import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'

export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/"><ImgStyles src='../images/midnightlogo.png' alt='midnight logo' className='midnightLogo' /></Link>
      <Nav></Nav>
      <a href="https://www.instagram.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram fa-3x"></i>
      </a>
      <a href="https://www.facebook.com/949midnight.motorsports" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook fa-3x"></i>
      </a>
      <Link href="/login">
        Login
      </Link>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: space-evenly;
`

const ImgStyles = styled.img`
  height: inherit;
`