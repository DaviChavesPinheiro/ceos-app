import styled from "styled-components";
import { Section } from "../../styles/global";

export const Container = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 460px;

  margin-right: 170px;

  form {
    display: flex;
    flex-direction: column;
  }

`;
