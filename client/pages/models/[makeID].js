import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head'
import capitalize from "../../lib/capitalize";

const SINGLE_MAKE_QUERY = gql`
query Make($id: ID!) {
  Make(where: {
    id: $id
  }) {
    name
    models {
      id
      name
      images {
          name
          image {
              publicUrlTransformed
          }
          altText
      }
      year {
        beginningYear
        endYear
      }
    }
  }
}`

export default function ModelSelectionPage({ query }) {
    const { data, loading, error } = useQuery(SINGLE_MAKE_QUERY, {
        variables: { id: query.makeID }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <Container>
            <Head>
                <title>
                    {`Midnight Motorsports | ${capitalize(data.Make.name)} Models`}
                </title>
            </Head>
            <PageTitle>{capitalize(data.Make.name)} Models</PageTitle>
            <IconContainer>
                {data.Make.models.map((model) => {
                    return (
                        <div key={model.id}>
                            <Link href={`/categories/${model.id}`} shallow>
                                <ModelSelectIcon src={model?.images?.filter(image => image.name === `${model.name}icon`)[0]?.image?.publicUrlTransformed} />
                            </Link>
                            <PageTitle>{model.name.toUpperCase()}</PageTitle>
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
    margin-bottom: 3rem;
`

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 5rem;
`

const ModelSelectIcon = styled.img`
    width: inherit;
    height: 18rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
     }
`