import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import DiscordImg from "../../assets/discord.png";

import { Button, Container, Image, Text } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
}

export function ButtonIcon({ title }: ButtonProps) {
  return (
    <Button>
      <Container>
        <Image source={DiscordImg} />
      </Container>
      <Text>{title}</Text>
    </Button>
  );
}
