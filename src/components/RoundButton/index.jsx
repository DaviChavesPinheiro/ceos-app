import React from 'react';

import { Container } from './styles';

const Button = ({ children, icon: Icon, color, fill}) => (
  <Container color={color} fill={fill}>
    <Icon className="icon"></Icon>
  </Container>
);

export default Button;
