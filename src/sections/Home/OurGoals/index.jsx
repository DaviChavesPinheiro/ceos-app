import React from "react";
import Image from "next/image";
import { Container, Content, ImgContainer } from "./styles";

import Button from "../../../components/Button";

const OurGoals = props => {

  return (
    <Container>
      <Content>
        <h2>Nossos objetivos</h2>
        <h3>Consulte nossos especialistas sobre o seu projeto <strong>gratuitamente</strong>.</h3>
        <h4>
          Desenvolvemos com sucesso muitos projetos, incluindo blogs,
          plataformas de publicação e gestão de talentos, sites de comércio
          eletrônico, agências de viagens, um aplicativo da web compativel
          com HPAA e uma plataforma de concursos sem fins lucrativos.
        </h4>
        <Button style={{marginTop: "10px"}}>Inicie um projeto conosco</Button>
      </Content>
      <ImgContainer>
        <Image src="/image.svg" layout="fill" objectFit="contain"></Image>
      </ImgContainer>
    </Container>
  )
}

export default OurGoals;
