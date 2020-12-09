import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import ServiceCard from "../../../components/Cards/ServiceCard";

const Services = props => {

  return (
    <Container>
      <Content>
        <h2>Serviços</h2>
        <h3>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</h3>
        <h4>Ajudamos sua empresa a refletir seu verdadeiro eu por meio de projetos inovadores</h4>
      </Content>
      <CardsContainer>
        <ServiceCard>Card 1</ServiceCard>
        <ServiceCard>Card 2</ServiceCard>
        <ServiceCard>Card 3</ServiceCard>
        <ServiceCard>Card 4</ServiceCard>
      </CardsContainer>
    </Container>
  )
}

export default Services;
