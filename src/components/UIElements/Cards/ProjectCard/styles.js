import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 320px;
  height: 350px;
  border-radius: 8px;
  background-color: #f4f7fc;

  margin: 10px;
  padding: 40px 40px 30px 40px;
  transition: transform 0.5s ease;

  position: relative;

  overflow: hidden;

  section {
    position: absolute;
    left: 0px;
    bottom: 0px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 0px 20px;

    width: 100%;
    height: 0px;

    transition: height 0.15s ease;

    background-color: #f4f7fc;
    h3 {
      font-weight: 700;
      color: #0d0e5d;
      display: none;
    }
  }

  &:hover section{
    height: 70px;

    h3 {
      display: block;
    }
  }

`
