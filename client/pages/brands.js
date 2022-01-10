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
    if (error) return <p>Error: {error}</p>

    return (
        <Container>
            <Head>
                <title>
                    {`Midnight Motorsports | All Brands`}
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
    padding: 3rem 7rem 5rem 7rem;
`

export const PageTitle = styled.div`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 5rem;
`

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 5rem;
`

const BrandSelectIcon = styled.img`
    width: inherit;
    height: 18rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
     }
`