import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";
import styled from 'styled-components';
import { useRouter } from "next/router";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  // Sign in mutation
  const [signin, { error, data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signin();
    resetForm();
  }

  const queryError =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;
  
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <Error error={queryError} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <LoginButton type="submit">Log In!</LoginButton>
      </fieldset>
    </Form>
  );
}
export const LoginButton = styled.button`
background-color: transparent;
  color: white;
  transition: 200ms;
  border: 1px solid transparent;
  border-radius: 10rem;
  width: fit-content;

  &:hover {
    transition: 400ms;
    cursor: pointer;
    color: #6FFFE9;
    background-color: #0B132B;
    border: 1px solid #6FFFE9;
    border-radius: 10rem;
  }`