import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: url("/shapes.svg") no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0;
    width: 200px;
    height: 200px;
    background: #f4f7fc;
    clip-path: polygon(100% 0, 45% 45%, 100% 100%);
    z-index: -10;
  }
`
export const Content = styled.div`
  padding: 50px 150px 10px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

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
