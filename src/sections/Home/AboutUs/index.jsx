import React from "react";
import { Container, Content, Analytics } from "./styles";
import { Description, SectionTitle, Title } from "../../../styles/global";

const AboutUs = props => {

  return (
    <Container>
      <Content>
        <SectionTitle>Sobre nós</SectionTitle>
        <Title>Nossa visão é construir uma solução empresarial de sucesso.</Title>
        <Description>
          Um processo de desenvolvimento bem estruturado é crucial para criar
          produtos que as pessoas adoram. CEOS tem um processo de desenvolvimento
          rigoroso que inclui o desenvolvimento dirigido por testes.
        </Description>
        <Analytics>
          <div>
            <span>4500</span>
            <h2>Projetos feitos</h2>
          </div>
          <div>
            <span>250+</span>
            <h2>Clientes</h2>
          </div>
          <div>
            <span>350</span>
            <h2>Projetos em andamento</h2>
          </div>
        </Analytics>
      </Content>
    </Container>
  )
}

export default AboutUs;
