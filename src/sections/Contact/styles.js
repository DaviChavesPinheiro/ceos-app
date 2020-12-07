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

export const SectionTitle = styled.h2`
  font-size: 16px;
  color: #ff9000;
  margin-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  margin-bottom: 15px;
`

export const Description = styled.h2`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 45px;
`
