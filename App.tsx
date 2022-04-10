import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import ThemeProvider from "./src/store/globalTheme";
import Main from "./src/screens/Main";

const App: React.FC = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    "JosefinSans-Regular": JosefinSans_400Regular,
    "JosefinSans-Bold": JosefinSans_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  );
};

export default App;