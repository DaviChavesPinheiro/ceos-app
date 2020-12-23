import React from "react";
import { Container, Content, ImgContainer } from "./styles";
import Image from "next/image";

const Main = props => {

  return (
    <Container>
      <ImgContainer>
        <Image src="/Image1.svg" layout="fill" objectFit="contain"></Image>
      </ImgContainer>
      <Content>
        <h2>CEOS / Portfólio / Projeto</h2>
        <h3>Obtenha a melhor solução para o seu projeto</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
      </Content>
    </Container>
  )
}

export default Main;
