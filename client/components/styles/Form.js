import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  h2 {
    text-align: center;
    font-weight: bold;
  }
  label {
    display: block;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  input,
  textarea,
  select {
    width: 94.4%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #0b132b;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    background: #0b132b;
    color: white;
    border: 0;
    font-size: 1.5;
    font-weight: 600;
    display: inline-block;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      min-height: 10px;
      content: '';
      display: block;
      background-color: white;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
