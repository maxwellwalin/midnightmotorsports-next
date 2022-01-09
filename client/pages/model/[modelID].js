import { useQuery } from '@apollo/client'
import Head from 'next/head'
import gql from 'graphql-tag'
import styled from 'styled-components'
import PartCard from '../../components/PartCard'

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
    if (error) return <p>Error: {error}</p>

    let filteredParts = data.Model.parts
    let modelName = data.Model.name.toUpperCase()

    if (query.categoryName) {
        filteredParts = data.Model.parts.map((part) => {
            return ({
                ...part,
                categories: part.categories.filter(category => category.name == query.categoryName)
            })
        }).filter(part => part.categories.length > 0)

        modelName += " " + query.categoryName[0].toUpperCase() + query.categoryName.slice(1);
    }

    return (
        <div>
            <Head>
                <title>
                    {`Midnight Motorsports | ${data.Model.name.toUpperCase()} Parts`}
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
        </div>
    )
}

const Container = styled.div`
    
`

const ModelHero = styled.div`
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30rem;
  border: 2px solid white;
  border-radius: 8px;
  margin-bottom: 2rem;
`

const ModelName = styled.div`
    text-shadow: 0px 0px 10px black;
    font-size: 4rem;
`

const PartsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 7px;
    margin: 0 2rem 2rem 2rem;
`