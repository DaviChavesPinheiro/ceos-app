import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import ProjectCard from "../../../components/Cards/ProjectCard";

const Projects = props => {

  return (
    <Container>
      <Content>
        <h2>Portfólio</h2>
        <h3>Concluímos <strong>+2500 projetos</strong> de clientes incríveis.</h3>
      </Content>
      <CardsContainer>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </CardsContainer>
    </Container>
  )
}

export default Projects;
