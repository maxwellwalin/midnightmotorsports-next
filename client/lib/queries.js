import gql from "graphql-tag";

export const ALL_CATEGORIES_QUERY = gql`
    query ALL_CATEGORIES_QUERY {
        allCategories {
            id
            name
        }
    }
`;