import React from "react";
import { Container, ImageContainer } from "./styles";
import Image from "next/image";

const ProjectCard = ({imgUrl, name}) => {

  return (
    <Container>
      <Image src={imgUrl} layout="fill" objectFit="cover"></Image>

      <section>
        <h3>{name}</h3>
      </section>
    </Container>
  )
}

export default ProjectCard;
