import { useQuery } from '@apollo/client'
import Head from 'next/head'
import gql from 'graphql-tag'
import styled from 'styled-components'
import PartCard from '../../components/PartCard'
import capitalize from '../../lib/capitalize'

const SINGLE_MODEL_QUERY = gql`
query Model($id: ID!) {
    Model(where: {
        id: $id
    }) {
        id
        name
        images {
            name
            altText
            image {
                publicUrlTransformed
            }
        }
        parts {
            id
            name
            description
            price
            quantity
            categories {
                name
            }
            images {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
}
`

export default function ProductsPage({ query }) {
    const { data, loading, error } = useQuery(SINGLE_MODEL_QUERY, {
        variables: { id: query.modelID }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    let filteredParts = data.Model.parts
    let modelName = data.Model.name.toUpperCase()

    if (query.categoryName) {
        filteredParts = data.Model.parts.map((part) => {
            return ({
                ...part,
                categories: part.categories.filter(category => category.name == query.categoryName)
            })
        }).filter(part => part.categories.length > 0)

        modelName += " " + query.categoryName[0].toUpperCase() + query.categoryName.slice(1)
    }

    return (
        <>
            <Head>
                <title>
                    {`Midnight Motorsports | ${modelName} Parts`}
                </title>
            </Head>
            <Container>
                <ModelHero style={{
                    backgroundImage: `url(${data.Model.images.filter(image => image.name == `${data.Model.name}hero`)[0].image.publicUrlTransformed})`}}>
                    <ModelName>{modelName} Parts</ModelName>
                </ModelHero>
                <PartsContainer>
                    {filteredParts.map(part => {
                            return (
                                <PartCard
                                    key={part.id}
                                    id={part.id}
                                    model={data.Model.name.toUpperCase()}
                                    image={part.images[0].image.publicUrlTransformed}
                                    name={part.name}
                                    price={part.price}
                                    description={part.description}
                                    quantity={part.quantity}
                                />
                            )
                        })}
                </PartsContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    justify-items: center;
    align-items: center;
`

const ModelHero = styled.div`
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex; 
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 15rem;
  border-top: 1px solid #6FFFE9;
  border-bottom: 2px solid #6FFFE9;
`

const ModelName = styled.div`
    text-shadow: 0px 0px 10px #0b132b;
    font-size: 4rem;
`

const PartsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    align-items: start;
    gap: 2rem;
    padding: 2rem;
    max-width: 60%;
    border: 2px solid #6FFFE9;
    border-top: 0;
    border-bottom: 0;
`