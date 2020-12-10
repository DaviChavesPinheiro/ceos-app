import React from "react";
import { Container, Content } from "./styles";
import DepoimentoCard from "../../../components/Cards/DepoimentoCard";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const OurTeam = ({depoimentos}) => {

  return (
    <Container>
      <Content>
        <h2>Depoimentos</h2>
        <h3>Citações especiais de nossos clientes sobre nós.</h3>
      </Content>
      <Flickity options={{initialIndex: Math.ceil(depoimentos.length / 2) - 1, wrapAround: true}}>
        {depoimentos.map(depoimento => (
          <DepoimentoCard {...depoimento}></DepoimentoCard>
        ))}
      </Flickity>
    </Container>
  )
}

export default OurTeam;
