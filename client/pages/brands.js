import styled from 'styled-components';
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag';
import Link from 'next/link'
import Head from 'next/head'

const ALL_MAKES_QUERY = gql`
query allMakes {
  makes {
    id
    name
    image {
      image {
        publicUrlTransformed
      }
      altText
    }
  }
}
`

export default function Brands() {
    const { loading, data, error } = useQuery(ALL_MAKES_QUERY);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <Container>
            <Head>
                <title>
                    {`Midnight Motorsports | Our Brands`}
                </title>
            </Head>
            <PageTitle>Our Brands</PageTitle>
            <IconContainer>
                {data.makes.map((make) => {
                    return (
                        <div key={make.id}>
                            <Link href={`/models/${make.id}`} shallow>
                                <BrandSelectIcon src={make?.image?.image?.publicUrlTransformed} />
                            </Link>
                        </div>
                    )
                })}
            </IconContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 2rem 20vw 4rem 20vw;

    @media screen and (max-width: 1780px) {
        padding: 2rem 12vw 4rem 12vw;
    }

    @media screen and (max-width: 1400px) {
        padding: 2rem 8vw 4rem 8vw;
    }
`

export const PageTitle = styled.h2`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
`

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    align-items: center;
    gap: 5rem;
    padding: 2rem 0;
    border-radius: 12px;

    @media screen and (max-width: 800px) {
        padding: 2rem 8vw 4rem 8vw;
    }
`

const BrandSelectIcon = styled.img`
    width: inherit;
    max-height: 12rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
     }
`
