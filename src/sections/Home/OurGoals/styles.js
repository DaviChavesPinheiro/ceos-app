import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100px;
    width: 200px;
    height: 200px;
    background: #f4f7fc;
    clip-path: circle(50% at 50% 50%);
    z-index: -10;
  }
`;
export const Content = styled.div`
  flex: 1;

  width: 100%;
  max-width: 520px;
  min-width: 500px;
  margin-left: 30px;
  margin-right: 20px;

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


  @media only screen and (max-width: 900px) {
    button {
      width: 100%;
      font-size: 1.5rem;
      height: 60px;
    }
  }
`;

export const ImgContainer = styled.div`
  /* margin-right: 120px; */
  width: 500px;
  height: 500px;
  margin-right: 20px;
  margin-left: 20px;

  position: relative;
`;
