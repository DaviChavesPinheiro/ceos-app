import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  body {
    /* overflow-x: hidden; */
  }

  html{
    scroll-behavior:smooth
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: 'Roboto', serif;
  }

  strong {
    font-weight: 500;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  /* border: 1px solid black; */
`
