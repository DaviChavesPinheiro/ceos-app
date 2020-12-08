import React from "react";
import { Container, Content, MainTitle } from "./styles";
import Header from "../../../components/Header";
import { Description, SectionTitle, Title } from "../../../styles/global";
import styled from "styled-components";

import Button from "../../../components/Button";



const Main = props => {

  return (
    <Container>
      <Header></Header>
      <Content>
        <MainTitle>Obtenha a melhor solução para o seu projeto</MainTitle>
        <Description>Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal</Description>
        <Button style={{marginTop: "10px"}}>Inicie um projeto conosco</Button>
      </Content>
    </Container>
  )
}

export default Main;
