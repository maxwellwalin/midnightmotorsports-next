import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import { CURRENT_USER_QUERY } from "./User";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(partId: $id) {
      id
    }
  }
`;

const CheckoutButton = styled.button`
    font-size: 24px;
    color: rgb(255, 255, 255);
    border: none;
    padding: 0.6em 1.5em 0.5em;
    background: rgb(239, 6, 6);
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  if (error) {
    window.location = "/login";
  }
  return (
    <CheckoutButton disabled={loading} type="button" onClick={addToCart}>
      Add{loading && "ing"} To Cart 🛒
    </CheckoutButton>
  );
}
