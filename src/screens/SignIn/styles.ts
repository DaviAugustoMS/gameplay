import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.title700};
  margin-bottom: 16px;
  line-height: 40;
`;

export const SubText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  margin-bottom: 64px;
  line-height: 25;
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;
