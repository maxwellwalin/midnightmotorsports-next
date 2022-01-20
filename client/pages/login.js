import styled from "styled-components";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 25%;
  justify-items: center;
  align-items: center;
  align-content: center;
`;

export default function Login() {
  return (
    <GridStyles>
      <SignIn />
      <SignUp />
    </GridStyles>
  );
}
