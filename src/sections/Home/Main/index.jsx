import React from "react";
import { Container, Content, ImgContainer } from "./styles";
import Image from "next/image";
import Button from "../../../components/Forms/Button";

const Main = props => {

  return (
    <Container>
      <Content>
        <h1>Obtenha a melhor solução para o seu projeto</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
        <Button>Inicie um projeto conosco</Button>
      </Content>
      <ImgContainer>
        <Image src="/Image1.svg" layout="fill" objectFit="contain"></Image>
      </ImgContainer>
    </Container>
  )
}

export default Main;
