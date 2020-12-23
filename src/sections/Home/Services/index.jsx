import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import ServiceCard from "../../../components/Cards/ServiceCard";

const Services = (props) => {
  return (
    <Container>
      <Content>
        <Content>
          <h2>Serviços</h2>
          <h3>
            Somos uma equipe de contadores de histórias, pensadores e
            solucionadores de problemas.
          </h3>
          <h4>
            Ajudamos sua empresa a refletir seu verdadeiro eu por meio de
            projetos inovadores
          </h4>
        </Content>
      </Content>
      <CardsContainer>
        <ServiceCard iconSrc="icon-card.svg"></ServiceCard>
        <ServiceCard iconSrc="icon-rocket.svg"></ServiceCard>
        <ServiceCard iconSrc="icon-card.svg"></ServiceCard>
        <ServiceCard iconSrc="icon-rocket.svg"></ServiceCard>
      </CardsContainer>
    </Container>
  );
};

export default Services;
