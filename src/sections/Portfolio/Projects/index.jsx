import React, {useCallback} from "react";
import { Container, Content, CardsContainer } from "./styles";
import ProjectCard from "../../../components/Cards/ProjectCard";

const Projects = ({projects}) => {
  const getParsedProjectsAmount = useCallback(() => {
    return Math.floor((projects.length / 10)) * 10;
  }, [projects])

  return (
    <Container>
      <Content>
        <h2>Portfólio</h2>
        <h3>Concluímos <strong>+{getParsedProjectsAmount()} projetos</strong> de clientes incríveis.</h3>
      </Content>
      <CardsContainer>
        {projects.map(project => (
          <ProjectCard imgUrl={project.imgUrl} name={project.name}></ProjectCard>
        ))}
      </CardsContainer>
    </Container>
  )
}

export default Projects;
