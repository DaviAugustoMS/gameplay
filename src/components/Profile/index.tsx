import React from "react";

import { Avatar } from "../Avatar";

import {
  Conatiner,
  Content,
  User,
  Greeting,
  UserName,
  Mensage,
} from "./styles";
export function Profile() {
  return (
    <Conatiner>
      <Avatar urlImage="https://github.com/DaviAugustoMS.png" />
      <Content>
        <User>
          <Greeting>Olá,</Greeting>
          <UserName>Davi Augusto</UserName>
        </User>
        <Mensage>Hoje é dia de vitória</Mensage>
      </Content>
    </Conatiner>
  );
}
