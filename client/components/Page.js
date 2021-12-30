import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: propTypes.node,
};

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    font-family: 'Sora', sans-serif;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
    color: #979aff;
  }

  button {
    font-family: 'Sora', sans-serif;
  }

  button:hover {
    cursor: pointer;
  }
`;

const InnerStyles = styled.div`
  max-width: 1000px;
  margin: 0 12%;
  padding: 2rem;
`;
