import React from "react";

import { Container, Image } from "./styles";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  return (
    <Container>
      <Image source={{ uri: urlImage }} />
    </Container>
  );
}
