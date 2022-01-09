import gql from "graphql-tag";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(partId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
    const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
        variablees: { id },
    });
  return <button type="button">Add To Cart</button>;
}
