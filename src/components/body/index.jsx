import React from "react";
import { Icon, Logo, Rakh, Wrapper } from "../Card/style";
import {
  Container,
  Container2,
  Git,
  Im,
  Log,
  Proj,
  Soke,
  Texts,
  Web,
  Wrapper1,
} from "./style";
import pro from "../../assets/ion/proj.svg";
import git from "../../assets/ion/github.svg";
import fast from "../../assets/img/food2.png";
import pizza from "../../assets/img/pizzaLogo.png";
import fruct from "../../assets/img/fructs.png";
import calcul from "../../assets/img/caa.png";
import wba from "../../assets/img/wba.jpg";

import Sms from "../../assets/ion/sms.svg";

export const Body = () => {
  return (
    <Container>
      <Wrapper1>
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
      </Wrapper1>
      <Soke>
        - Programmer with hands-on experience in advanced web development.
        <br />
        - Equipped with advanced and latest software skills in web development.
        <br />
        - Passionate to learn new tech skills and improve.
        <br />
        - Extroverted and eager to learn from colleges and build a friendly
        environment.
        <br />- Adept in various social media platforms and office technology
        programs
      </Soke>
      <Proj>
        <Icon src={pro} alt="icon" />
        <a href="https://github.com/Vaha77"> | Myprojects</a>
      </Proj>
      <Container2>
        {/* 1 */}
        <Wrapper>
          <Logo src={fast} />

          <Log src={wba} />
          <Web>
            Web <span>(Brain)</span> Acedemy Product
          </Web>
          <Git>
            <Icon src={git} alt="icon" />
            <p>
              <a href="https://github.com/Vaha77/project-fastfood"> GitHub </a>
            </p>
          </Git>
        </Wrapper>
        {/* 2 */}
        <Wrapper>
          <Logo src={pizza} />

          <Log src={wba} />
          <Web>
            Web <span>(Brain)</span> Acedemy Product
          </Web>
          <Git>
            <Icon src={git} alt="icon" />
            <p>
              <a href="https://github.com/Vaha77/project-fastfood"> GitHub </a>
            </p>
          </Git>
        </Wrapper>
        {/* 3 */}
        <Wrapper>
          <Logo src={fruct} />

          <Log src={wba} />
          <Web>
            Web <span>(Brain)</span> Acedemy Product
          </Web>
          <Git>
            <Icon src={git} alt="icon" />
            <p>
              <a href="https://github.com/Vaha77/project-fastfood"> GitHub </a>
            </p>
          </Git>
        </Wrapper>
        {/* 4 */}
        <Wrapper>
          <Logo src={calcul} />

          <Log src={wba} />
          <Web>
            Web <span>(Brain)</span> Acedemy Product
          </Web>
          <Git>
            <Icon src={git} alt="icon" />
            <p>
              <a href="https://github.com/Vaha77/project-fastfood"> GitHub </a>
            </p>
          </Git>
        </Wrapper>
      </Container2>
      <Proj>
        <Icon src={Sms} alt="icon" />
        <a href="https://github.com/Vaha77"> | My | SNS</a>
      </Proj>
    </Container>
  );
};

export default Body;
