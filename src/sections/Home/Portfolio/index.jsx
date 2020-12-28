import React, { useCallback } from "react";
import { Container, Content, CardsContainer } from "./styles";
import Button from "../../../components/Forms/Button";
import ProjectCard from "../../../components/UIElements/Cards/ProjectCard";

const Portfolio = ({ projects }) => {
  const getParsedProjectsAmount = useCallback(() => {
    return Math.floor(projects.length / 10) * 10;
  }, [projects]);

  return (
    <Container>
      <Content>
        <Content>
          <h2>Portfólio</h2>
          <h3>
            Concluímos <strong>+{getParsedProjectsAmount()} projetos</strong> de
            clientes incríveis.
          </h3>
        </Content>
      </Content>
      <CardsContainer>
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            imgUrl={project.imgUrl}
            name={project.name}
          ></ProjectCard>
        ))}
      </CardsContainer>
      <Button style={{ width: "150px", alignSelf: "center" }}>Ver mais</Button>
    </Container>
  );
};

export default Portfolio;
