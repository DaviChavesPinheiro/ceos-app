import styled from "styled-components";
import { Section } from "../../../styles/global";

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 2.8em;
  letter-spacing: 1px;
  margin-bottom: 35px;
`;

export const Container = styled(Section)`
  padding-top: 50px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  background: url("/shapes.svg") no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: -60px;
    left: 0;
    width: 100%;
    max-width: 800px;
    height: 85%;
    background: #f4f7fc;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 89%);
    z-index: -10;
  }
`;
export const Content = styled.div`
  /* margin-top: 100px; */

  width: 100%;
  max-width: 460px;

  margin-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    letter-spacing: 1px;
    color: #666;
    margin-bottom: 45px;
  }
`;

export const ImgContainer = styled.div`
  /* margin-top: 100px;
  margin-right: 50px; */
  width: 500px;
  height: 500px;

  position: relative;
`;
