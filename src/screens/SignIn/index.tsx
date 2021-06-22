import React from 'react'

import {
  Container,
  Text, 
  Image,
  Content, 
  SubText,
  StatusBar
} from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {
  
  return(
    <Container>
      <StatusBar />
      <Image source={IllustrationImg} resizeMode='stretch'/>
      <Content>
        <Text>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>
        <SubText >
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubText>
        <ButtonIcon title='Entrar com Discord' activeOpacity={0.7}/>
      </Content>
    </Container> 
  )
}