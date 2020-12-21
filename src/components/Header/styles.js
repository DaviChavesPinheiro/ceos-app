import styled from "styled-components";

export const Container = styled.header`
  /* position: absolute; */
  z-index: 10;
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  padding: 0px 130px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    list-style-type: none;

    li {
      margin-left: 25px;

      a {
        text-decoration: none;
        color: #0d0e5d;

        &.active {
          font-weight: bold;
        }

        &:hover {
          font-weight: bold;
        }
      }

      &:last-child {
        border: 2px solid #ff9000;
        border-radius: 5px;

        padding: 7px 23px;
        margin-left: 35px;
      }
    }
  }

`
