import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    /* overflow-x: hidden; */
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: 'Roboto', serif;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
`
