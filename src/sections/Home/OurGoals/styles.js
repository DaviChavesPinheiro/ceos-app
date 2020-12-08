import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

`
export const Content = styled.div`

  width: 100%;
  max-width: 520px;

  margin-left: 190px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
