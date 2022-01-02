import Link from 'next/link';
import styled from 'styled-components';
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag';

const ALL_MAKES_QUERY = gql`
query allMakes {
  allMakes {
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

    console.log(data.allMakes)

    return (
        <Container>
            <PageTitle>Our Brands</PageTitle>
            <IconContainer>
                {data.allMakes.map((make) => {
                    return (
                        <div>
                            <img src={make?.image?.image?.publicUrlTransformed} width={200} height={200} />
                            <p>{make.name}</p>
                        </div>
                    )
                })}
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
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