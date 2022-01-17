import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Head from 'next/head';

export default function Page({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="description" content="Midnight Motorsports is the best place to shop for performance car parts and accessories online. Based in Lake Forest, California, we are an auto-body shop that specializes in performance and maintenance." />
        <meta property="og:description" content="Midnight Motorsports is the best place to shop for performance car parts and accessories online. Based in Lake Forest, California, we are an auto-body shop that specializes in performance and maintenance." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/midnightlogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
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
    background: #0B132B;
    color: white;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: white;
    transition: 400ms;
  }

  button {
    display: flex;
    align-content: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
  }

  button:hover {
    cursor: pointer;
  }
`;