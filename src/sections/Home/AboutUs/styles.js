import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  background: url("/dash-line.svg") no-repeat;
  background-size: contain;
  background-position: 120% 0px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
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
  min-width: 500px;
  margin-left: 20px;
  margin-right: 20px;

  /* margin-right: 190px;
  margin-left: 140px; */

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

export const Analytics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 14px;
      line-height: 20px;
      color: #666;
    }

  }

`;

export const ImgContainer = styled.div`
  /* margin-left: 120px; */
  width: 500px;
  height: 500px;
  margin-right: 20px;
  margin-left: 20px;
  position: relative;
`;

