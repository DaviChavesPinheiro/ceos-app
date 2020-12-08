import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import { SectionTitle, Title } from "../../../styles/global";
import Button from "../../../components/Button";

const Portfolio = props => {

  return (
    <Container>
     <Content>
        <SectionTitle>Portfólio</SectionTitle>
        <Title>Concluímos +2500 projetos de clientes incríveis.</Title>
      </Content>
      <CardsContainer>
        <div>Cards</div>
      </CardsContainer>
      <Button style={{width: "150px", alignSelf: "center"}}>Ver mais</Button>
    </Container>
  )
}

export default Portfolio;
