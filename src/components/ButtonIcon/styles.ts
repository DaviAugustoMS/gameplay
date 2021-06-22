import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 274px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.colors.line};
  border-width: 1;
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
`

export const Container = styled.View`
  width: 56px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right-width: 1;
  border-color: ${({theme}) => theme.colors.line};
  margin-right: 40px;
`

export const Image = styled.Image`
  width: 24px;
  height: 18px;
`

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.text500};
  font-size: 15px;
  color: ${({theme}) => theme.colors.heading};

`
