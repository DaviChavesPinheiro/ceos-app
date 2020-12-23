import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: url("/dash-line.svg") no-repeat;
  background-size: contain;
  background-position: -40% 0px;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0;
    width: 200px;
    height: 200px;
    background: #f4f7fc;
    clip-path: polygon(100% 0, 45% 45%, 100% 100%);
    z-index: -10;
  }
`;
export const Content = styled.div`
  /* padding: 30px 400px 10px 150px; */
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  justify-content: flex-start;
    margin-left:50px;

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

  h4 {
    font-size: 14px;
    line-height: 25px;
    color: #666;
    margin-bottom: 45px;
  }
`;

export const CardsContainer = styled.div`
  padding: 40px 150px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
