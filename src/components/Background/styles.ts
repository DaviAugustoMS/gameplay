import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/styles/theme";

const { secondary80, secondary100 } = theme.colors;

export const Container = styled(LinearGradient).attrs({
  colors: [secondary80, secondary100],
})`
  flex: 1;
`;
