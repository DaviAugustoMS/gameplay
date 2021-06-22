import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import DiscordImg from '../../assets/discord.png'

import {Button, Container, Image, Text} from './styles'

interface ButtonProps extends TouchableOpacityProps  {
  title: string
}
export function ButtonIcon({title, activeOpacity}: ButtonProps) {
  return(
    <Button activeOpacity={activeOpacity}>
      <Container>
        <Image source={DiscordImg} />
      </Container>
      <Text>
        {title}
      </Text>
    </Button>
  )
}