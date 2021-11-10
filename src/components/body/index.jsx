import React from "react";
import { Container, Im, Soke, Texts, Wrapper } from "./style";

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        <Im>RAKHIMOV VOKHIDJON | </Im>
        <Im>I'm</Im>
        <Texts>
          <ul>
            <li>Student</li>
            <li>Youtuber</li>
            <li>Developer</li>
            <li>Designer</li>
          </ul>
        </Texts>
      </Wrapper>
      <Soke>우즈베크스탄에서 온 유학생 와하라고합니다.</Soke>
    </Container>
  );
};

export default Body;
