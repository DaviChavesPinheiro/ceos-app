import styled from "styled-components";
import { Section } from "../../../styles/global";

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 2.8em;
  letter-spacing: 1px;
  margin-bottom: 35px;
`

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Content = styled.div`
  margin-top: 100px;

  width: 100%;
  max-width: 460px;

  margin-left: 190px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
