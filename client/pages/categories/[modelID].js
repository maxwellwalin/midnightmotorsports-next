import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from 'styled-components'
import Link from "next/link"

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
            {data.allCategories.map((category) => {
                return (
                    <CategoryCard key={category.id}>
                        <Link href={`/model/${query.modelID}?category=${category.id}`} shallow>
                            <div>
                                <img src={category.image.image.publicUrlTransformed}></img>
                                <p>{category.name}</p>
                            </div>
                        </Link>
                    </CategoryCard>
                )
            })}
        </Container>
    )
}

const Container = styled.div`

`

const CategoryCard = styled.div`

`