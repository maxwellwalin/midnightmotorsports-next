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
        <link rel="icon" href="/images/midnightlogo-transparent.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Header />
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

  :root {
    --oxford-blue: #0b132bff;
    --space-cadet: #1c2541ff;
    --independence: #3a506bff;
    --maximum-blue-green: #5bc0beff;
    --turquoise-blue: #6fffe9ff;
  }

  body {
    background: #0B132B;
    color: white;
  }

  main {
    min-height: 74.7vh;
    padding-top: 129px;
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
    font-family: 'Sora', sans-serif;
    text-align: center;
  }

  button:hover {
    cursor: pointer;
  }
`;