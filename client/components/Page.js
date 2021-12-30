import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header></Header>
      <Nav></Nav>
      {children}
      <Footer></Footer>
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
