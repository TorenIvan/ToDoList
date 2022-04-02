import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { theme, dark, light, globalThemeType } from "./src/utils";
import Header from "./src/containers/Header";

const App: React.FC = (): JSX.Element => {
  const [globalTheme, setGlobalTheme] = useState<globalThemeType>({
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
      <Header globalTheme={globalTheme} onThemeChange={handleThemeChange} />
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
