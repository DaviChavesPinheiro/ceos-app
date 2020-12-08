import styled from "styled-components";
import { Section } from "../../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
export const Content = styled.div`
  flex: 1;
  padding: 10px 400px 10px 150px;
`;

export const CardsContainer = styled.div`
  flex: 20;
  padding: 0px 150px;
`;
