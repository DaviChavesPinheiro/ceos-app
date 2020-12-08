import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import { SectionTitle, Title } from "../../../styles/global";
import Button from "../../../components/Button";

const OurTeam = props => {

  return (
    <Container>
     <Content>
        <SectionTitle>Nosso time</SectionTitle>
        <Title style={{fontWeight: "bold"}}>Uma equipe de solucionadores de problemas.</Title>
      </Content>
      <CardsContainer>
        <div>Cards</div>
      </CardsContainer>
      <Button style={{width: "150px", alignSelf: "center"}}>Ver mais</Button>
    </Container>
  )
}

export default OurTeam;
