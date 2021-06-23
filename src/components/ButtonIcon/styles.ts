import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  height: 56px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  width: 56px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.line};
  margin-right: 40px;
`;

export const Image = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.heading};
  flex: 1;
`;
