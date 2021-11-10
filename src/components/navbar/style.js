import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #000000;
  color: white;
  /* width: 100%; */
  height: 80px;
  padding: 0 30px;
`;

export const Card = styled.div`
  display: flex;
`;
export const NavTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  span {
    color: gold;
  }
  cursor: pointer;
`;

export const Search = styled.input`
  display: flex;
  width: 700px;
  height: 30px;
  border-radius: 10px 0px 0 10px;
  margin-left: 700px;
  border: none;
  font-size: 25px;
`;

export const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #000000;
  width: 60px;
  height: 30px;
  border-radius: 0 10px 10px 0px;
  cursor: pointer;
  border-left: 1px solid #000000;
  font-size: 17px;
  :active {
    background-color: #000000;
    color: white;
    font-size: 19px;
  }
  margin-right: 50px;
`;

export const Kinop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  width: 100px;
  margin-right: 20px;
  cursor: pointer;
  :active {
    background-color: white;
    color: #000000;
  }
`;
