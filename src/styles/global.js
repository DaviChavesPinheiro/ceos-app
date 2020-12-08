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
`

export const SectionTitle = styled.h2`
  font-size: 16px;
  color: #ff9000;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  margin-bottom: 15px;
`

export const Description = styled.h4`
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 45px;
`
