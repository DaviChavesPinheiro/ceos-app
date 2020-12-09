import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  align-self: flex-start;

  height: 35px;

  border-radius: 5px;
  border: 0;

  padding: 10px 14px;

  color: #fff;
  background-color: #ff9000;

  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

