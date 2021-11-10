import React from "react";
import { Card, Container, Kinop, NavTitle, Search, Submit } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <Card>
        <NavTitle>
          <span>L</span>ogo
        </NavTitle>
        <Search />
        <Submit>Search</Submit>
        <Kinop>Login</Kinop>
        <Kinop>SingUp</Kinop>
      </Card>
    </Container>
  );
};

export default Navbar;
