import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from 'styled-components'
import Link from "next/link"
import { PageTitle } from "../brand/[makeID]"

const ALL_CATEGORIES_QUERY = gql`
    query allCategories {
        allCategories {
            id
            name
            image {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`

export default function Categories({ query }) {
    const { data, loading, error } = useQuery(ALL_CATEGORIES_QUERY)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <Container>
            <PageTitle>
                Choose A Category:
            </PageTitle>
            <CategoryContainer>
                {data.allCategories.map((category) => {
                    return (
                        <CategoryCard key={category.id}>
                            <Link href={`/model/${query.modelID}?categoryName=${category.name}`} shallow>
                                <div>
                                    <img src={category.image.image.publicUrlTransformed}></img>
                                    <div>{category.name.toUpperCase()}</div>
                                </div>
                            </Link>
                        </CategoryCard>
                    )
                })}
            </CategoryContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 3rem 25vw;
`

const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
`

const CategoryCard = styled.div`
    background-color: white;
    color: black;
    text-align: center;
    margin-bottom: 3.5rem;
`