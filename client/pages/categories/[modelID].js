import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from 'styled-components'
import Link from "next/link"
import capitalize from "../../lib/capitalize"
import Head from 'next/head'
import { PageTitle } from "../brands"

const ALL_CATEGORIES_QUERY = gql`
    query allCategories {
        categories {
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
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <Head>
                <title>{`Midnight Motorsports | Categories`}</title>
            </Head>
            <Container>
                <PageTitle>
                    Choose A Category
                </PageTitle>
                <CategoryContainer>
                    <CategoryCard>
                        <Link href={`/parts/${query.modelID}`} shallow>
                            <div>
                                <CardImage src={data.categories[0].image.image.publicUrlTransformed}></CardImage>
                                <div>All Parts</div>
                            </div>
                        </Link>
                    </CategoryCard>
                    {data.categories.map((category) => {
                        return (
                            <CategoryCard key={category.id}>
                                <Link href={`/parts/${query.modelID}?categoryName=${category.name}`} shallow>
                                    <div>
                                        <CardImage src={category.image.image.publicUrlTransformed}></CardImage>
                                        <div>{capitalize(category.name)}</div>
                                    </div>
                                </Link>
                            </CategoryCard>
                        )
                    })}
                </CategoryContainer>
            </Container>
        </>
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
    color: #0b132b;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 3.5rem;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const CardImage = styled.img`
    border-radius: 8px 8px 0 0;
`