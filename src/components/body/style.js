import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
`;

export const Wrapper = styled.div`
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
