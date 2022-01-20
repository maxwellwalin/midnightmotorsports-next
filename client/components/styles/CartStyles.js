import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 2rem;
  width: 33%;
  height: 70%;
  background: #1c2541ff;
  position: fixed;
  top: 129px;
  right: 0;
  min-width: 500px;
  transform: translateX(100%);
  transition: all 0.3s;
  z-index: 5;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: 3px solid #6FFFE9;
  border-left: 2px solid #6FFFE9;
  ${(props) => props.open && `transform: translateX(0);`};

  header {
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: calc(100% - 4rem);
    align-items: center;
    justify-items: center;
    font-size: 1.5rem;
    margin: 0;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default CartStyles;
