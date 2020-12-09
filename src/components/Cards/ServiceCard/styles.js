import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 280px;
  height: 330px;
  border-radius: 8px;
  background-color: #f4f7fc;

  margin: 10px;
  padding: 40px 40px 30px 40px;
  transition: transform 0.5s ease;

  &:hover {
    box-shadow: 4px 8px 29px 6px rgba(65,60,185,0.32);
    transform: translate(0px, -10px);
    background-color: #2879fe;

    h3 {
      color: #fff;
    }

    h4 {
      color: #fff;
    }
  }

  h3 {
    font-weight: 700;
    color: #0d0e5d;
  }

  h4 {
    font-size: 14px;
    line-height: 22px;
    color: #666;
  }

  a {
    font-size: 16px;
    color: #ff9000;
    text-decoration: none;
  }

`

export const ImageContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;

  position: relative;

  background-color: #eaeff5;
`
