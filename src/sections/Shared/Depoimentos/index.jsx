import React from "react";
import { Container, Content } from "./styles";
import DepoimentoCard from "../../../components/Cards/DepoimentoCard";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const OurTeam = props => {

  return (
    <Container>
      <Content>
        <h2>Depoimentos</h2>
        <h3>Citações especiais de nossos clientes sobre nós.</h3>
      </Content>
      <Flickity options={{initialIndex: 1, wrapAround: true}}>
        <DepoimentoCard></DepoimentoCard>
        <DepoimentoCard></DepoimentoCard>
        <DepoimentoCard></DepoimentoCard>
      </Flickity>
    </Container>
  )
}

export default OurTeam;
