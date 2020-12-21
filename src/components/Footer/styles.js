import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  z-index: 10;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding-top: 70px;

  background-color: #f4f7fc;

`

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0px 10px;
  padding-bottom: 60px;

  div:nth-child(1),div:nth-child(2),div:nth-child(3),div:nth-child(4){
    margin-right:20px;
  }

  /* div:nth-child(1) {
    flex: 2;
    .content {
      margin-left: 120px;
    }
  }
  div:nth-child(2) {
    flex: 1;
  }
  div:nth-child(3) {
    flex: 1;
  } */
  div:nth-child(4) {
    /* flex: 2; */
    display: flex;
    /* justify-content: flex-end; */

    button {
      margin-right: 15px;
    }
    /* button:last-child {
      margin-right: 80px;
    } */
  }

  h2 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;

    list-style-type: none;

    li {
      margin-bottom: 10px;
    }
  }

  p, li, a {
    font-size: 14px;
    line-height: 25px;
    color: #909090;
  }

  a {
    text-decoration: none;
  }
`

export const CopyRightContainer = styled.div`
  border-top: 1px solid #dedede;

  width: 100%;
  padding: 10px 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    line-height: 25px;
    color: #909090;
  }

`
