import React from "react";
import { Profile } from "../../components/Profile";

import { Container, Header } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
    </Container>
  );
}
