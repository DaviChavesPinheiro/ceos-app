import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 550px;
  width: 650px;
  height: 290px;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 40px 20px;
  padding: 60px 40px 30px 40px;
  box-shadow: 4px 8px 29px 6px rgba(65,60,185,0.12);

  @media only screen and (max-width: 900px) {
    width:550px;
    height: 320px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #666;
  }
`

export const About = styled.div`
  display: flex;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;

  position: relative;

  background-color: #f4f7fc;
`

export const Info = styled.div`
  margin-left: 20px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  h3 {
    font-weight: bold;
  }

  h4 {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #666;
  }
`


