import styled from "styled-components";
import { Section } from "../../styles/global";

export const Container = styled(Section)`
  /* display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; */

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 60px;

  background: url("/shapes.svg") no-repeat;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 460px;
  margin-right: 50px;
  /* margin-right: 170px; */

  background-color: white;

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

  form {
    display: flex;
    flex-direction: column;

  }

  @media only screen and (max-width: 900px) {
      button {
        /* Fix this later!!! */
        width: 100% !important;
        margin-bottom:30px;
      }
    }
`;

export const ImgContainer = styled.div`
  width: 700px;
  height: 700px;
  margin-right: 40px;

  position: relative;
`;

// display: flex;
// justify-content: space-evenly;
// flex-direction: row;
// flex-direction: column;
// margin-top: 60px;
// margin-bottom: 60px;
// flex-wrap: wrap;
