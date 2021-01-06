import React from "react";
import { Container, Content, ImgContainer } from "./styles";
import Image from "next/image";

const Main = props => {

  return (
    <Container>
      <Content>
        <h2>CEOS / Sobre nós</h2>
        <h3>Business Is Yours But To Grow Up It's Our Responsability</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
      </Content>
      <ImgContainer>
        <Image src="/Image5.png" width="500px" height="500px" objectFit='cover'></Image>
      </ImgContainer>
    </Container>
  )
}

export default Main;
