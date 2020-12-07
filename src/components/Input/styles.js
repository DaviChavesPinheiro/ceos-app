import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding: 0 16px;
  color: #8c8c8c;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      color: #03a9f5;
      border-color: ${shade(0.2, '#03a9f5')};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #03a9f5;
    `}

  & + div {
    margin-top: 20px;
  }

  input {
    height: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #6c6c6c;
    &::placeholder {
      color: #8c8c8c;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff9000;
  font-size: 13px;
  margin: 5px 0px 8px 0px;
  padding-left: 5px;
`;
