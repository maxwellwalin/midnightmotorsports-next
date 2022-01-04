import gql from "graphql-tag";

export const ALL_CATEGORIES_QUERY = gql`
  query ALL_CATEGORIES_QUERY {
    allCategories {
      id
      name
    }
  }
`;

export const ALL_MODELS_QUERY = gql`
  query ALL_MODELS_QUERY {
    allModels {
      id
      name
    }
  }
`;
