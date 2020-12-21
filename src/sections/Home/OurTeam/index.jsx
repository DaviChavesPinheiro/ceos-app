import React from "react";
import { Container, Content, CardsContainer } from "./styles";
import Button from "../../../components/Button";
import MemberCard from "../../../components/Cards/MemberCard";

const OurTeam = ({ members }) => {
  return (
    <Container>
      <Content>
        <Content>
          <h2>Nosso time</h2>
          <h3>Uma equipe de solucionadores de problemas.</h3>
        </Content>
      </Content>
      <CardsContainer>
        {members.slice(0, 4).map((member, index) => (
          <MemberCard
            key={index}
            imgUrl={member.imgUrl}
            name={member.name}
            situation={member.situation}
          ></MemberCard>
        ))}
      </CardsContainer>
      <Button style={{ width: "150px", alignSelf: "center" }}>Ver mais</Button>
    </Container>
  );
};

export default OurTeam;
