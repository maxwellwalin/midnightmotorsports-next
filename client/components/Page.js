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
    background: darkgrey;
    color: white;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: white;
    transition: 400ms;
  }

  a:hover {
    color: black;
    border-bottom: 1px solid black;
    transition: 400ms;
    margin-bottom: 20px;
    
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

  .aboutContainer {
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

  }

.box1 {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  padding: 3%;
  display: flex;
  align-items: center;
  margin: 5%;
  border-radius: 10px;
  background:gray;
  width:80%;
  height:400px;
  animation-name: fadeBox;
  animation-duration: 3ms;
}

@keyframes fadeBox {
  0% {opacity: 0%}
}

.aboutPar {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 3%;
  background: darkgray;
  border-radius: 4px;
  box-shadow: 0px 0px 30px 5px black;
}

.zimg {
  box-shadow: 0px 0px 30px 5px black;
  margin: 3%;
  max-width: 30%;
  max-height: 500px;
}

`;
