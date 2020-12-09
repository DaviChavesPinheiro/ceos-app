import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100px;
    width: 200px;
    height: 200px;
    background: #f4f7fc;
    clip-path: circle(50% at 50% 50%);
    z-index: -10;
  }

`
export const Content = styled.div`
  flex: 1;

  width: 100%;
  max-width: 520px;

  margin-right: 190px;
  margin-left: 140px;

  h2 {
    font-size: 16px;
    color: #ff9000;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 1px;
    margin-bottom: 15px;
    color: #0d0e5d;
  }

  h4 {
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 1px;
    color: #666;
    margin-bottom: 45px;
  }

`;

export const ImgContainer = styled.div`
  margin-right: 120px;
  width: 500px;
  height: 500px;

  position: relative;
`;
