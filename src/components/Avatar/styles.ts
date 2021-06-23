import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/styles/theme";

const { secondary50, secondary70 } = theme.colors;

export const Container = styled(LinearGradient).attrs({
  colors: [secondary50, secondary70],
})`
  width: 49px;
  height: 49px;
  border-radius: 8;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`;

export const Image = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 8px;
`;
