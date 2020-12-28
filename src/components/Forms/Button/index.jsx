import React from 'react';
import Image from 'next/image'
import { Container } from './styles';

const Button = ({ children, hasArrow, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
    {hasArrow == null && (
      <Image src="/arrow.svg" width="40px" height="20px" color="white"></Image>
    )}
  </Container>
);

export default Button;
