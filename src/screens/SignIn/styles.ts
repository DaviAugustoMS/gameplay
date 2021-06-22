import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondary90};
`

export const Content = styled.View`
 margin-top: -40px;
`

export const Text = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-size: 40px;
  font-family: ${({theme}) => theme.fonts.title700};
  margin-bottom: 16px;
`

export const SubText = styled.Text`
  font-family: ${({theme}) => theme.fonts.text400};
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-size: 15px;
  margin-bottom: 64px;
`

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: 'transparent',
  translucent: true
})``