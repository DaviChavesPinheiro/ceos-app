import React from "react";
import { Container, Content, CardsContainer } from "./styles";

const Projects = props => {

  return (
    <Container>
      <Content>
        <h2>Portfólio</h2>
        <h3>Concluímos <strong>+2500 projetos</strong> de clientes incríveis.</h3>
      </Content>
      <CardsContainer>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
      </CardsContainer>
    </Container>
  )
}

export default Projects;
