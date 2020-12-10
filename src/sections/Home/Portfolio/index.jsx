import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import Button from "../../../components/Button";
import ProjectCard from "../../../components/Cards/ProjectCard";

const Portfolio = props => {

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
      </CardsContainer>
      <Button style={{width: "150px", alignSelf: "center"}}>Ver mais</Button>
    </Container>
  )
}

export default Portfolio;
