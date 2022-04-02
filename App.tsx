import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import theme, { Theme, dark, light } from "./src/utils/constants/theme.js";
import Header from "./src/containers/Header";

interface globalTheme {
  isLight: boolean;
  theme: Theme;
}

const App: React.FC = (): JSX.Element => {
  const [globalTheme, setGlobalTheme] = useState<globalTheme>({
    theme: theme,
    isLight: true,
  });

  const handleThemeChange = () => {
    setGlobalTheme({
      theme: globalTheme.isLight
        ? { ...dark }
        : { ...light },
      isLight: !globalTheme.isLight,
    });
  };

  return (
    <View style={styles.container}>
      <Header theming={globalTheme} onThemeChange={handleThemeChange} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
