import styled from "styled-components";
import { Section } from "../../../styles/global";


export const Container = styled(Section)`

  padding-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 100px;
    bottom: 60px;
    left: 200px;
    width: 2000px;
    min-width: 100%;
    background: #f4f7fc;
    clip-path: polygon(0 0, 100% 14%, 100% 100%, 0 86%);
    z-index: -10;
  }
`
export const Content = styled.div`
  margin-top: 150px;

  width: 100%;
  max-width: 460px;

  margin-right: 190px;

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
  margin-top: 100px;
  margin-left: 150px;
  width: 500px;
  height: 500px;

  position: relative;
`;
