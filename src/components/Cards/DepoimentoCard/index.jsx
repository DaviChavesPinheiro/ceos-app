import React from "react";
import { Container, About, ImageContainer, Info } from "./styles";
import Image from "next/image";

const DepoimentoCard = ({depoimento, imgUrl, name, situation}) => {

  return (
    <Container>
      <p>
        {depoimento}
      </p>
      <About>
        <ImageContainer>
          <Image src={imgUrl || '/profile.svg'} layout="fill"></Image>
        </ImageContainer>
        <Info>
          <h3>{name}</h3>
          <h4>{situation}</h4>
        </Info>
      </About>
    </Container>
  )
}

export default DepoimentoCard;
