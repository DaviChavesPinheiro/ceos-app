import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

`
export const Content = styled.div`
  flex: 1;

  width: 100%;
  max-width: 520px;

  margin-right: 190px;

`;

export const Analytics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 14px;
      line-height: 20px;
      color: #666;
    }

  }

`;
