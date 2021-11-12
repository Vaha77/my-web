import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Wrapper1 = styled.div`
  display: flex;
  margin: 50px 0;
`;

export const Im = styled.div`
  color: #000000;
  font-size: 60px;
  font-weight: 400;
  line-height: 90px;
`;

export const Texts = styled.div`
  margin-left: 15px;
  line-height: 90px;
  height: 90px;
  overflow: hidden;

  li {
    list-style: none;
    color: #ff4c29;
    font-size: 60px;
    font-weight: 500;
    top: 0;

    position: relative;
    animation: slide 12s steps(4) infinite;
  }
  @keyframes slide {
    100% {
      top: -360px;
    }
  }
  li {
    position: relative;
  }
  li::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    border-left: 2px solid #ff4c29;
    animation: typing 3s steps(7) infinite;
  }
  @keyframes typing {
    40%,
    60% {
      left: calc(100% + 30px);
    }
    100% {
      left: 0;
    }
  }
`;
export const Soke = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #22343d;
`;

export const Proj = styled.div`
  margin: 50px 10px 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  text-align: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  a {
    text-decoration: none;
    color: #000000;
  }
  :active {
    background-color: #000000;
  }
`;

export const Log = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const Web = styled.div`
  font-size: 23px;
  span {
    color: gold;
  }
`;

export const Git = styled.div`
  margin: 10px 10px 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  text-align: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  a {
    text-align: center;

    font-size: 20px;
    text-decoration: none;
    color: #000000;
  }
`;
