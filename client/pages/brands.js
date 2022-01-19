import styled from 'styled-components';
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag';
import Link from 'next/link'
import Head from 'next/head'

const ALL_MAKES_QUERY = gql`
query allMakes {
  allMakes {
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
                {data.allMakes.map((make) => {
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
    padding: 2rem 20% 4rem 20%;
`

export const PageTitle = styled.div`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
`

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    align-items: center;
    row-gap: 5rem;
    background-color: #1c2541ff;
    padding: 2rem 0;
    border-radius: 12px;
`

const BrandSelectIcon = styled.img`
    width: inherit;
    height: 12rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
     }
`
