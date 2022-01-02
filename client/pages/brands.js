import styled from 'styled-components';
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag';
import Link from 'next/link'

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

    console.log(data.allMakes)

    return (
        <Container>
            <PageTitle>Our Brands</PageTitle>
            <IconContainer>
                {data.allMakes.map((make) => {
                    return (
                        <Link href={`brand/${make.id}`}>
                            <BrandSelectIcon src={make?.image?.image?.publicUrlTransformed} />
                        </Link>
                    )
                })}
            </IconContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 3rem 7rem 5rem 7rem;
`

const PageTitle = styled.div`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 5rem;
    text-decoration: underline;
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

// const MitsubishiLogo = styled.img`
//     width: 17rem;
//     height: 20rem;

//     &:hover {
//         cursor: pointer;
//         transition: 300ms;
//         -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
//         filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
//     }
// `

// const SubaruLogo = styled.img`
//     width: 33rem;
//     height: 20rem;

//     &:hover {
//         cursor: pointer;
//         transition: 300ms;
//         -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
//         filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
//     }
// `

// const BMWLogo = styled.img`
//     width: 18rem;
//     height: 18rem;

//     &:hover {
//         cursor: pointer;
//         transition: 300ms;
//         -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
//         filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
//     }
// `