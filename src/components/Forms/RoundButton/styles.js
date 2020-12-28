import styled from 'styled-components';

export const Container = styled.button`
  align-self: flex-start;

  height: 30px;
  width: 30px;

  border: 1px solid ${props => props.color};
  border-radius: 40%;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    color: ${props => props.color};
    fill: ${props => props.fill || "white"};
  }

  &:hover {
    background-color: ${props => props.color};
  }
  &:hover .icon {
    color: ${props => !props.fill || "white"};
    fill: white;
  }

`;

