import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;
export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  height: 470px;
  width: 350px;
  text-align: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  a {
    margin-top: 30px;
    font-size: 30px;
    text-decoration: none;
  }
  /* :hover {
    height: 490px;
    width: 390px;
  } */
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Rakh = styled.div`
  font-size: 25px;
`;
export const Cont = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  span {
    font-size: 25px;
    font-style: normal;
  }
`;

export const Icon = styled.img`
  width: 40px;
`;
