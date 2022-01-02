import { useQuery } from '@apollo/client'
import Head from 'next/head'
import gql from 'graphql-tag'

const SINGLE_MODEL_QUERY = gql`
query Model($id: ID!) {
    Model(where: {
        id: $id
    }) {
        id
        name
        images {
            altText
            image {
                publicUrlTransformed
            }
        }
        parts {
            id
            name
            price
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
        variables: { id: query.id }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    console.log(data.Model)

    return (
        <div>
            <Head>
                <title>
                    {`Midnight Motorsports | ${data.Model.name.toUpperCase()} Parts`}
                </title>
            </Head>
            <p>Model ID = {query.id}</p>
            <p>Category ID = {query.category}</p>
        </div>
    )
}
