import React from "react";
import { Container, ImageContainer } from "./styles";
import Image from "next/image";

const ServiceCard = ({iconSrc}) => {

  return (
    <Container>
      <ImageContainer>
          <Image src={`/${iconSrc}`} layout="fill"></Image>
      </ImageContainer>
      <h3>Desenvolvimento de Software</h3>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h4>
      <a href="#contact">
        Saiba Mais
        <Image src="/arrow.svg" width="40px" height="20px"></Image>  
      </a>

    </Container>
  )
}

export default ServiceCard;
