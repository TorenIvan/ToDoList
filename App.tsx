import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { theme, dark, light, globalThemeType } from "./src/utils";
import Header from "./src/containers/Header";
import ListItem from "./src/components/ListItem";
import ListItems from "./src/containers/ListItems";
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
        <ListItem theme={globalTheme.theme} isAddNew={true} />
      </View>
      {/* List of To-Do Items */}
      {/* <ListItems /> */}
      {/* <View
        style={{
          backgroundColor: "red",
          flex: .8,
          width: "80%",
          marginTop: "-10%",
          alignSelf: "center",
        }}
      >
      </View> */}
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
    height: imageHeight * 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
});
