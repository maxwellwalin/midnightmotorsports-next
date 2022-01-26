import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head'
import capitalize from "../../lib/capitalize";
import { PageTitle } from "../brands";

const SINGLE_MAKE_QUERY = gql`
query Make($id: ID!) {
  make(where: { id: $id }) {
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
    }
  }
}

`

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
                    {`Midnight Motorsports | ${capitalize(data.make.name)} Models`}
                </title>
            </Head>
            <PageTitle>{capitalize(data.make.name)} Models</PageTitle>
            <IconContainer>
                {data.make.models.map((model) => {
                    return (
                        <div key={model.id}>
                            <Link href={`/categories/${model.id}`} shallow>
                                <ModelSelectIcon src={model?.images?.filter(image => image.name === `${model.name}icon`)[0]?.image?.publicUrlTransformed} />
                            </Link>
                            <ModelName>{model.name.toUpperCase()}</ModelName>
                        </div>
                    )
                })}
            </IconContainer>
        </Container>
    )
}

const Container = styled.div`
    min-height: 74.7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IconContainer = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    justify-items: center;
    align-items: center;
    row-gap: 5rem;
    padding: 2rem 20%;
    border-radius: 12px;
`

const ModelName = styled.h3`
    text-align: center;
    margin: 0;
`

const ModelSelectIcon = styled.img`
    width: inherit;
    max-height: 12rem;

    &:hover {
        cursor: pointer;
        transition: 300ms;
        -webkit-filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
     }
`