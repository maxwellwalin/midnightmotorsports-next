import { useRouter } from "next/router";
import styled from "styled-components";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useUser } from "../components/User";

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
  const user = useUser();
  const router = useRouter();
  
  if (user) {
    router.push("/brands")
  }
  return (
    <GridStyles>
      <SignIn />
      <SignUp />
    </GridStyles>
  );
}
