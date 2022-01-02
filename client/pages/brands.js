import Link from 'next/link';
import styled from 'styled-components';

export default function Brands() {
    return (
        <Container>
            <PageTitle>Our Brands</PageTitle>
            <IconContainer>
                <Link href='/mitsubishi'><MitsubishiLogo src='/images/transparentmitlogo.png' className='mitlogo' alt='mitsubishi logo' /></Link>
                <Link href='/subaru'><SubaruLogo src='/images/transparentsublogo.png' className='subarulogo' alt="Subaru logo" /></Link>
                <Link href='/bmw'><BMWLogo src='/images/transparentbmwlogo.png' className='bmwlogo' alt='bmw logo' /></Link>
            </IconContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

const PageTitle = styled.div`
    font-size: 3rem;
    margin: 3rem 0 0 0;
    border-bottom: 2px solid white;
`

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    min-height: 30rem;
`

const MitsubishiLogo = styled.img`
    width: 17rem;
    height: 20rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
    }
`

const SubaruLogo = styled.img`
    width: 33rem;
    height: 20rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
    }
`

const BMWLogo = styled.img`
    width: 18rem;
    height: 18rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
    }
`