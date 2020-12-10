import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import Button from "../../../components/Button";
import MemberCard from "../../../components/Cards/MemberCard";

const OurTeam = props => {

  return (
    <Container>
      <Content>
        <h2>Nosso time</h2>
        <h3>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</h3>
      </Content>
      <CardsContainer>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
      </CardsContainer>
      <Button style={{width: "150px", alignSelf: "center"}}>Ver mais</Button>
    </Container>
  )
}

export default OurTeam;
