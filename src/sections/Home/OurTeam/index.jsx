import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import { SectionTitle, Title } from "../../../styles/global";
import Button from "../../../components/Button";

const OurTeam = props => {

  return (
    <Container>
      <Content>
        <h2>Nosso time</h2>
        <h3>Uma equipe de solucionadores de problemas.</h3>
      </Content>
      <CardsContainer>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
      </CardsContainer>
      <Button style={{width: "150px", alignSelf: "center"}}>Ver mais</Button>
    </Container>
  )
}

export default OurTeam;
