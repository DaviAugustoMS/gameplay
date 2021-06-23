import React from "react";
import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import { useFonts } from "expo-font";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

import theme from "./src/global/styles/theme";

import StatusBar from "./src/global/styles/styles";

import { Routes } from "./src/routes";

import { Background } from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar />
        <Routes />
      </Background>
    </ThemeProvider>
  );
}
