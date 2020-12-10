import React from "react";
import Image from "next/image";
import { Container, Content, Analytics, ImgContainer } from "./styles";

const AboutUs = ({projectsOverview}) => {

  return (
    <Container>
      <ImgContainer>
        <Image src="/image.svg" layout="fill" objectFit="contain"></Image>
      </ImgContainer>
      <Content>
        <h2>Sobre nós</h2>
        <h3>Nossa visão é construir uma solução empresarial de sucesso.</h3>
        <h4>
          Um processo de desenvolvimento bem estruturado é crucial para criar
          produtos que as pessoas adoram. CEOS tem um processo de desenvolvimento
          rigoroso que inclui o desenvolvimento dirigido por testes.
        </h4>
        <Analytics>
          <div>
            <span>{projectsOverview.projects}</span>
            <h2>Projetos feitos</h2>
          </div>
          <div>
            <span>{projectsOverview.clients}+</span>
            <h2>Clientes</h2>
          </div>
          <div>
            <span>{projectsOverview.onGoingProjects}</span>
            <h2>Projetos em andamento</h2>
          </div>
        </Analytics>
      </Content>
    </Container>
  )
}

export default AboutUs;
