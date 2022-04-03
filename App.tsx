import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { theme, dark, light, globalThemeType } from "./src/utils";
import Header from "./src/containers/Header";
import { imageHeight } from "./src/utils";

const App: React.FC = (): JSX.Element => {
  const [globalTheme, setGlobalTheme] = useState<globalThemeType>({
    theme: theme,
    isLight: true,
  });

  const handleThemeChange = () => {
    setGlobalTheme({
      theme: globalTheme.isLight ? { ...dark } : { ...light },
      isLight: !globalTheme.isLight,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header globalTheme={globalTheme} onThemeChange={handleThemeChange} />
        {/* Add New To-Do Item */}
        <View style={{backgroundColor: "red", height: "20%", width: "80%", marginTop: "16%"}}></View>
      </View>
      {/* List of To-Do Items */}
      <View
        style={{
          backgroundColor: "red",
          flex: .8,
          width: "80%",
          marginTop: "-10%",
          alignSelf: "center",
        }}
      >
      </View>
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
  header: {
    width: "100%",
    height: imageHeight * 1.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    zIndex: -1,
  },
});
