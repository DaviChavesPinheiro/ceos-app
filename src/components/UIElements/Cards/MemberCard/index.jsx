import React from "react";
import { Container, ImageContainer, SocialMediaLinksContainer } from "./styles";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import RoundButton from "../../../Forms/RoundButton";

const MemberCard = ({imgUrl, name, situation}) => {

  return (
    <Container>
      <ImageContainer>
          <Image src={imgUrl || "/profile.svg"} layout="fill"></Image>
      </ImageContainer>
      <h3>{name}</h3>
      <h4>
        {situation}
      </h4>
      <SocialMediaLinksContainer>
        <RoundButton icon={FiFacebook} color={"#2961fe"} fill={"#2961fe"}></RoundButton>
        <RoundButton icon={FiTwitter} color={"#2961fe"} fill={"#2961fe"}></RoundButton>
        <RoundButton icon={FiLinkedin} color={"#2961fe"} fill={"#2961fe"}></RoundButton>
        <RoundButton icon={FiInstagram} color={"#2961fe"}></RoundButton>
      </SocialMediaLinksContainer>
    </Container>
  )
}

export default MemberCard;
