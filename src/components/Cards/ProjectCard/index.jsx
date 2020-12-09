import React from "react";
import { Container, ImageContainer } from "./styles";
import Image from "next/image";

const ProjectCard = (props) => {

  return (
    <Container>
      <Image src="https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg" layout="fill" objectFit="cover"></Image>

      <section>
        <h3>Endo Clould</h3>
      </section>
    </Container>
  )
}

export default ProjectCard;
