import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

const SINGLE_MAKE_QUERY = gql`
query Make($id: ID!) {
  Make(where: {
    id: $id
  }) {
    models {
      id
      name
      year {
        beginningYear
        endYear
      }
    }
  }
}`

export default function BrandSelectionPage({ query }) {
    const { data, loading, error } = useQuery(SINGLE_MAKE_QUERY, {
        variables: { id: query.id }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    console.log(data.Make)

    return (
        <div>
            {data.Make.models.map((model) => {
                return (
                    <div>
                        <p>{model.id}</p>
                        <p>{model.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
