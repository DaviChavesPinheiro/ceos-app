import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import { Description, SectionTitle, Title } from "../../../styles/global";

const Services = props => {

  return (
    <Container>
      <Content>
        <SectionTitle>Serviços</SectionTitle>
        <Title style={{fontWeight: "bold"}}>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</Title>
        <Description>Ajudamos sua empresa a refletir seu verdadeiro eu por meio de projetos inovadores</Description>
      </Content>
      <CardsContainer>
        Cards
      </CardsContainer>
    </Container>
  )
}

export default Services;
