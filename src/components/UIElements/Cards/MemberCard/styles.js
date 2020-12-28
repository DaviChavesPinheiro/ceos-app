import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 280px;
  height: 330px;
  border-radius: 8px;
  background-color: #fff;

  margin: 10px;
  padding: 40px 40px 50px 40px;

  h3 {
    font-weight: 700;
    color: #0d0e5d;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 14px;
    line-height: 22px;
    color: #666;
  }

`

export const ImageContainer = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;

  margin-bottom: 20px;
  overflow: hidden;

  position: relative;

  background-color: #eaeff5;
`

export const SocialMediaLinksContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
`
