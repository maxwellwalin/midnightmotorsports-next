import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut({ A }) {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <A type="button" onClick={signout}>
      <Link href='/login'>
        Logout
      </Link>
    </A>
  );
}
