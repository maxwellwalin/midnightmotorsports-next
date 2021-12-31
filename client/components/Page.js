import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
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

  body {
    background: linear-gradient( rgb(0, 0, 0) 25%, rgb(36, 9, 134) 100%, rgb(42, 17, 99) 100%);
    color: white;
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
