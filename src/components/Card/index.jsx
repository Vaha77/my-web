import React from "react";
import { Cont, Container, Icon, Logo, Rakh, Wrapper } from "./style";
import inst from "../../assets/img/Inst.svg";
import fa from "../../assets/img/fa.svg";
import Git from "../../assets/img/git.svg";
import Link from "../../assets/img/link.svg";
import Like from "../../assets/ion/like.svg";
import Sms from "../../assets/ion/sms.svg";
import Bell from "../../assets/ion/bell.svg";
import { Proj } from "../body/style";
export const Card = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={inst} alt="img" />
        <Rakh>RAKHIMOV VOKHIDJIN</Rakh>
        <Cont>
          <Icon src={Like} alt="img" />
          <span>700</span>
          <Icon src={Bell} alt="img" />
          <span>200</span>

          <Icon src={Sms} alt="img" />
          <span>800</span>
        </Cont>
        <a href="https://www.instagram.com/____abdulvohid__/">My Instagram</a>
      </Wrapper>
      <Wrapper>
        <Logo src={fa} alt="img" />
        <Rakh>RAKHIMOV VOKHIDJIN</Rakh>
        <Cont>
          <Icon src={Like} alt="img" />
          <span>700</span>
          <Icon src={Bell} alt="img" />
          <span>200</span>

          <Icon src={Sms} alt="img" />
          <span>800</span>
        </Cont>
        <a href="https://www.facebook.com/rakhimov.vokhidjon">My | Facebook</a>
      </Wrapper>
      <Wrapper>
        <Logo src={Git} alt="img" />
        <Rakh>RAKHIMOV VOKHIDJIN</Rakh>
        <Cont>
          <Icon src={Like} alt="img" />
          <span>700</span>
          <Icon src={Bell} alt="img" />
          <span>200</span>

          <Icon src={Sms} alt="img" />
          <span>800</span>
        </Cont>
        <a href="https://github.com/Vaha77">My | GitHup</a>
      </Wrapper>
      <Wrapper>
        <Logo src={Link} alt="img" />
        <Rakh>RAKHIMOV VOKHIDJIN</Rakh>
        <Cont>
          <Icon src={Like} alt="img" />
          <span>700</span>
          <Icon src={Bell} alt="img" />
          <span>200</span>

          <Icon src={Sms} alt="img" />
          <span>800</span>
        </Cont>
        <a href="#">My | Linkedin</a>
      </Wrapper>
    </Container>
  );
};

export default Card;
