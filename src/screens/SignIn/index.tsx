import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Container, Text, Image, Content, SubText } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
    console.log("click");
  }
  return (
    <Container>
      <Image source={IllustrationImg} resizeMode="stretch" />
      <Content>
        <Text>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas
        </Text>
        <SubText>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubText>

        <TouchableOpacity onPress={handleSignIn}>
          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
