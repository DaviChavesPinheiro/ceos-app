import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 20px;
    left: 0;
    width: 100%;
    min-width: 100%;
    background: #f4f7fc;
    clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 97%);
    z-index: -10;
  }
`
export const Content = styled.div`
  /* padding: 30px 400px 10px 150px; */
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    width: 49vw;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }


  h2 {
    font-size: 16px;
    color: #ff9000;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 30px;
    font-weight: bold;
    line-height: 35px;
    letter-spacing: 1px;
    margin-bottom: 15px;
    color: #0d0e5d;
  }


`;

export const CardsContainer = styled.div`
  padding: 40px 150px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`;
