import React from "react";
import { Container, Content, CardsContainer } from "./styles";

const OurTeam = props => {

  return (
    <Container>
      <Content>
        <h2>Depoimentos</h2>
        <h3>Citações especiais de nossos clientes sobre nós.</h3>
      </Content>
      <CardsContainer>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </CardsContainer>
    </Container>
  )
}

export default OurTeam;
