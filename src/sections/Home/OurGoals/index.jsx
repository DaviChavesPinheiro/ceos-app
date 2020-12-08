import React from "react";
import { Container, Content } from "./styles";
import { Description, SectionTitle, Title } from "../../../styles/global";

import Button from "../../../components/Button";

const OurGoals = props => {

  return (
    <Container>
      <Content>
        <SectionTitle>Nossos objetivos</SectionTitle>
        <Title>Consulte nossos especialistas sobre o seu projeto <strong>gratuitamente</strong>.</Title>
        <Description>Desenvolvemos com sucesso muitos projetos, incluindo blogs,
          plataformas de publicação e gestão de talentos, sites de comércio
          eletrônico, agências de viagens, um aplicativo da web compativel
          com HPAA e uma plataforma de concursos sem fins lucrativos.
        </Description>
        <Button style={{marginTop: "10px"}}>Inicie um projeto conosco</Button>
      </Content>
    </Container>
  )
}

export default OurGoals;
