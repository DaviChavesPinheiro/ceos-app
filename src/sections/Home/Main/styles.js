import styled from "styled-components";
import { Section } from "../../../styles/global";

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 2.8em;
  letter-spacing: 1px;
  margin-bottom: 35px;
`

export const Container = styled(Section)`

  padding-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 800px;
    height: 85%;
    background: #f4f7fc;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 89%);
    z-index: -10;
  }
`
export const Content = styled.div`
  margin-top: 100px;

  width: 100%;
  max-width: 460px;

  margin-left: 190px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 3.2em;
    letter-spacing: 1px;
    margin-bottom: 35px;
    color: #0d0e5d;
  }

  h4 {
    width: 80%;
    font-size: 14px;
    line-height: 25px;
    color: #666;
    margin-bottom: 45px;
  }

`;

export const ImgContainer = styled.div`
  margin-top: 100px;
  margin-right: 50px;
  width: 500px;
  height: 500px;

  position: relative;
`;
