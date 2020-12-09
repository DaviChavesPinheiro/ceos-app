import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
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

    list-style-type: none;

    li {
      margin-left: 25px;

      a {
        text-decoration: none;
        color: #0d0e5d;

        &:hover {
          font-weight: bold;
        }
      }
    }
  }

`
