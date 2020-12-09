import React from "react";
import { Container, Content, CardsContainer } from "./styles";

const Services = props => {

  return (
    <Container>
      <Content>
        <h2>Serviços</h2>
        <h3>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</h3>
        <h4>Ajudamos sua empresa a refletir seu verdadeiro eu por meio de projetos inovadores</h4>
      </Content>
      <CardsContainer>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
      </CardsContainer>
    </Container>
  )
}

export default Services;
