import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import { SectionTitle, Title } from "../../../styles/global";

const OurTeam = props => {

  return (
    <Container>
     <Content>
        <SectionTitle>Depoimentos</SectionTitle>
        <Title style={{fontWeight: "bold"}}>Citações especiais de nossos clientes sobre nós.</Title>
      </Content>
      <CardsContainer>
        <div>Cards</div>
      </CardsContainer>
    </Container>
  )
}

export default OurTeam;
